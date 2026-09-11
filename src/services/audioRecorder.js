// IELTS Marathon 21 Days - MediaRecorder & Web Audio Engine
// Provides live microphone capture, real-time waveform visualization, and Blob handling

export class AudioRecorderEngine {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.stream = null;
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    this.animationId = null;
    this.isRecording = false;
    this.startTime = 0;
  }

  async startRecording(canvasElement = null, onTimeUpdate = null) {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });

      this.audioChunks = [];
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
      this.mediaRecorder = new MediaRecorder(this.stream, { mimeType });

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      // Set up AudioContext for live waveform visualizer
      if (canvasElement && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioCtx();
        const source = this.audioContext.createMediaStreamSource(this.stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 64;
        source.connect(this.analyser);

        const bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(bufferLength);
        this._drawWaveform(canvasElement);
      }

      this.startTime = Date.now();
      this.isRecording = true;
      this.mediaRecorder.start(250);

      // Timer interval
      if (onTimeUpdate) {
        this.timerInterval = setInterval(() => {
          if (this.isRecording) {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            onTimeUpdate(elapsed);
          }
        }, 1000);
      }

      return { success: true };
    } catch (err) {
      console.error('Microphone access failed:', err);
      let errorMsg = 'Không thể truy cập microphone. Vui lòng cấp quyền trong cài đặt trình duyệt.';
      if (err.name === 'NotAllowedError') {
        errorMsg = 'Quyền truy cập micro đã bị từ chối. Vui lòng bật lại micro trên thanh địa chỉ URL.';
      } else if (err.name === 'NotFoundError') {
        errorMsg = 'Không tìm thấy thiết bị thu âm (microphone) trên máy của bạn.';
      }
      return { success: false, error: errorMsg };
    }
  }

  _drawWaveform(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      if (!this.isRecording) return;
      this.animationId = requestAnimationFrame(draw);

      this.analyser.getByteFrequencyData(this.dataArray);
      ctx.clearRect(0, 0, width, height);

      const barWidth = (width / this.dataArray.length) * 1.8;
      let x = 0;

      for (let i = 0; i < this.dataArray.length; i++) {
        const barHeight = (this.dataArray[i] / 255) * (height * 0.8) + 4;
        ctx.fillStyle = '#C2410C'; // Terracotta accent token
        ctx.fillRect(x, height / 2 - barHeight / 2, barWidth, barHeight);
        x += barWidth + 2;
      }
    };
    draw();
  }

  stopRecording() {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        resolve({ blob: null, duration: 0 });
        return;
      }

      const duration = Math.floor((Date.now() - this.startTime) / 1000);
      clearInterval(this.timerInterval);
      if (this.animationId) cancelAnimationFrame(this.animationId);

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.audioChunks, { type: this.mediaRecorder.mimeType });
        if (this.stream) {
          this.stream.getTracks().forEach(t => t.stop());
        }
        if (this.audioContext && this.audioContext.state !== 'closed') {
          this.audioContext.close();
        }
        this.isRecording = false;
        resolve({ blob, duration, mimeType: this.mediaRecorder.mimeType });
      };

      this.mediaRecorder.stop();
    });
  }
}
