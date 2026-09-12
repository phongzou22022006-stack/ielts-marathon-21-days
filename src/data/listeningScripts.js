// IELTS Marathon - Native-spoken Listening Scripts (giọng người bản ngữ, en-GB)
// Mỗi day có: voice (edge-tts en-GB) + transcript tiếng Anh chuẩn (nhúng đúng đáp án),
// kèm bộ câu hỏi tiếng Anh thay cho bản tiếng Việt, khớp đáp án hiện có trong data.

export const LISTENING_SCRIPTS = {

  // ==================== IELTS 21 ====================

  "ielts21-d01": {
    voice: "en-GB-LibbyNeural",
    transcript: `Receptionist: Good morning. Focus Skills Workshop, how can I help?
Student: Hi. I'd like to book a place on the Saturday workshop.
Receptionist: Of course. The workshop starts at nine o'clock sharp on Saturday morning, so please arrive ten minutes early.
Student: Fine. Is there an age limit?
Receptionist: Yes, you need to be at least sixteen years old.
Student: How much does it cost?
Receptionist: For residents of the city, the fee is forty-five dollars.
Student: Do I need to prepare anything beforehand?
Receptionist: Just bring a notebook for the note-taking session. Everything else is provided.`,
    questions: [
      { id: "l-d1-q1", prompt: "[1] The 'Focus Skills Workshop' starts at [_____] a.m. on Saturday.", answer: "9" },
      { id: "l-d1-q2", prompt: "[2] The minimum age to join is [_____].", answer: "16" },
      { id: "l-d1-q3", prompt: "[3] The fee for residents of the city is [_____] dollars.", answer: "45" },
      { id: "l-d1-q4", prompt: "[4] Participants need to bring a [_____].", answer: "notebook" }
    ]
  },

  "ielts21-d02": {
    voice: "en-GB-SoniaNeural",
    transcript: `Clerk: Career Centre. How can I help?
Student: Hello, I'm calling about the Money Skills for Teens course.
Clerk: Certainly. The course runs for six sessions in total.
Student: When does the next class start?
Clerk: We begin on Tuesday afternoon.
Student: Do I need to send anything when I register?
Clerk: Yes, please email a short introduction to career@forum.com. Just spell forum, F-O-R-U-M, dot com.
Student: Will we do any writing?
Clerk: The first session includes a practical task in which you write professional emails.`,
    questions: [
      { id: "l-d2-q1", prompt: "[1] The 'Money Skills for Teens' course lasts [_____] sessions.", answer: "6" },
      { id: "l-d2-q2", prompt: "[2] The class begins on [_____] afternoon.", answer: "Tuesday" },
      { id: "l-d2-q3", prompt: "[3] Learners send an introduction email to career@[_____].", answer: "forum.com" },
      { id: "l-d2-q4", prompt: "[4] The first session includes practice writing professional [_____].", answer: "emails" }
    ]
  },

  "ielts21-d03": {
    voice: "en-GB-LibbyNeural",
    transcript: `Good morning, everyone, and welcome to the new city library. I'd like to give you a quick tour. First, our opening hours. From the first of next month, the library opens every morning at nine, and closes at eight in the evening.
On the ground floor you will find the computing and media area, while the children's room and the café are both upstairs. Most members ask about borrowing limits, so let me explain: you may borrow up to fifteen books at any one time, which is more generous than our old limit of ten. Finally, for those interested in our digital collection, the digitisation workshop runs every Tuesday at three o'clock in the afternoon. Please check the board by the entrance for further details. Thank you.`,
    questions: [
      { id: "l-d3-q1", prompt: "[1] What time does the new library open each morning?", options: ["A. 8:00 a.m.", "B. 9:00 a.m.", "C. 7:30 a.m."], answer: "B" },
      { id: "l-d3-q2", prompt: "[2] Which facility is on the ground floor?", options: ["A. The children's room", "B. The computing and media area", "C. The café"], answer: "B" },
      { id: "l-d3-q3", prompt: "[3] What is the maximum number of books members can borrow?", options: ["A. 5", "B. 10", "C. 15"], answer: "C" },
      { id: "l-d3-q4", prompt: "[4] When is the digitisation workshop held?", options: ["A. Tuesday", "B. Thursday", "C. Saturday"], answer: "A" }
    ]
  },

  "ielts21-d04": {
    voice: "en-GB-SoniaNeural",
    transcript: `Welcome to the Communication Centre. Let me explain the layout. The reception desk is on the ground floor, and the recording practice rooms are upstairs, on the second floor.
Each room has a different capacity. Recording room one can take up to four people, while recording room two is slightly smaller. When a room is in use, a red light shows outside the door, so you will know that recording is taking place.
Finally, I should mention our opening hours. During the week we close at six, but on Fridays we stay open for an extra evening session until seven o'clock. If you have any questions, please ask at reception.`,
    questions: [
      { id: "l-d4-q1", prompt: "[1] The recording practice rooms are on the [_____] floor.", answer: "second" },
      { id: "l-d4-q2", prompt: "[2] Recording room one is for up to [_____] people.", answer: "4" },
      { id: "l-d4-q3", prompt: "[3] A red light outside a room means [_____] is in progress.", answer: "recording" },
      { id: "l-d4-q4", prompt: "[4] On Fridays the centre is open until [_____] o'clock.", answer: "7" }
    ]
  },

  "ielts21-d05": {
    voice: "en-GB-LibbyNeural",
    transcript: `Clerk: Hello, Chunk Practice Club registration. Can I take some details?
Anna: Yes. My name is Anna Watson.
Clerk: And a contact number, please?
Anna: It's oh-nine, one-two-three, four-five, six-seven-eight.
Clerk: Which class would you prefer to attend?
Anna: I work during the day, so I'd like the class on Tuesday evening.
Clerk: That's our most popular one. And what is your main goal?
Anna: I want to build the vocabulary that I can actually use when I speak.`,
    questions: [
      { id: "l-d5-q1", prompt: "[1] The person registering is called [_____].", answer: "Anna" },
      { id: "l-d5-q2", prompt: "[2] Her phone number is [_____].", answer: "0912345678" },
      { id: "l-d5-q3", prompt: "[3] She would like the class on [_____] evening.", answer: "Tuesday" },
      { id: "l-d5-q4", prompt: "[4] Her main goal is to [_____] vocabulary she can use.", answer: "build" }
    ]
  },

  "ielts21-d06": {
    voice: "en-GB-RyanNeural",
    transcript: `Good morning. I'd like to present the results of our survey on media habits. In total, twelve hundred people took part, which gives our figures high reliability.
The main group we focused on was secondary school students, though we also interviewed some university students and office workers for comparison. The most striking finding is in short video viewing, which grew more sharply than reading paper books or listening to podcasts.
If we look at the overall conclusion, the clearest trend is a decline in sustained attention: most respondents reported that they found it harder to concentrate for long periods than they did three years ago. Thank you.`,
    questions: [
      { id: "l-d6-q1", prompt: "[1] How many people took part in the survey?", options: ["A. 1,200", "B. 1,000", "C. 800"], answer: "A" },
      { id: "l-d6-q2", prompt: "[2] Who was the main group focused on?", options: ["A. Secondary school students", "B. University students", "C. Office workers"], answer: "A" },
      { id: "l-d6-q3", prompt: "[3] Which activity grew the most sharply?", options: ["A. Watching short videos", "B. Reading paper books", "C. Listening to podcasts"], answer: "A" },
      { id: "l-d6-q4", prompt: "[4] What trend does the report's conclusion note?", options: ["A. Declining attention", "B. Increasing attention", "C. No change"], answer: "A" }
    ]
  },

  "ielts21-d07": {
    voice: "en-GB-LibbyNeural",
    transcript: `Interviewer: Hello, this is a short study-habits survey. May I ask you a few questions?
Learner: Of course.
Interviewer: How many years have you been learning English?
Learner: I've studied English for five years now, since secondary school.
Interviewer: And roughly how much time do you spend studying each day?
Learner: About forty minutes, usually in the evenings.
Interviewer: Which skill would you most like to improve?
Learner: Definitely speaking. I can understand most things, but I struggle to produce the language myself.
Interviewer: Finally, what is your biggest difficulty?
Learner: I think it's losing motivation when I don't see progress quickly enough.`,
    questions: [
      { id: "l-d7-q1", prompt: "[1] The respondent has studied English for [_____] years.", answer: "5" },
      { id: "l-d7-q2", prompt: "[2] Average daily study time is [_____] minutes.", answer: "40" },
      { id: "l-d7-q3", prompt: "[3] The skill she most wants to improve is [_____].", answer: "speaking" },
      { id: "l-d7-q4", prompt: "[4] Her main difficulty is losing [_____].", answer: "motivation" }
    ]
  },

  "ielts21-d08": {
    voice: "en-GB-SoniaNeural",
    transcript: `Hello, I'm the coordinator of the school video club. First, our meetings: we gather every Wednesday evening, so please don't come on Monday or Friday.
In our first session we will focus on scriptwriting, because a strong script makes filming much easier later. For the competition this term, each video must be no longer than three minutes. Please also note the deadline: entries must be submitted by the twenty-second of November. Any questions?`,
    questions: [
      { id: "l-d8-q1", prompt: "[1] When does the club meet?", options: ["A. Monday evening", "B. Wednesday evening", "C. Friday evening"], answer: "B" },
      { id: "l-d8-q2", prompt: "[2] What does the first session teach?", options: ["A. Scriptwriting", "B. Filming", "C. Editing"], answer: "A" },
      { id: "l-d8-q3", prompt: "[3] Each competition video must be at most [_____] minutes long.", options: ["A. 1 minute", "B. 3 minutes", "C. 5 minutes"], answer: "B" },
      { id: "l-d8-q4", prompt: "[4] The entry deadline is [_____].", options: ["A. 15/11", "B. 22/11", "C. 30/11"], answer: "B" }
    ]
  },

  "ielts21-d09": {
    voice: "en-GB-RyanNeural",
    transcript: `Welcome to Northside Park. I'll guide you around the newly redesigned area. The main entrance is on the eastern side of the park, close to the children's playground.
If you walk towards the lake in the centre, you'll find the café on its western bank. For nature lovers, the bird-watching area occupies the southeast corner of the park, where the trees are thickest. Finally, motorcycle parking has been arranged just outside the north gate, so that cars and motorbikes do not mix inside the park. Enjoy your visit.`,
    questions: [
      { id: "l-d9-q1", prompt: "[1] The main entrance is near the children's [_____].", answer: "playground" },
      { id: "l-d9-q2", prompt: "[2] The café is on the [_____] side of the lake.", answer: "west" },
      { id: "l-d9-q3", prompt: "[3] The bird-watching area is in the [_____] corner.", answer: "southeast" },
      { id: "l-d9-q4", prompt: "[4] Motorcycle parking is outside the [_____] gate.", answer: "north" }
    ]
  },

  "ielts21-d10": {
    voice: "en-GB-LibbyNeural",
    transcript: `Hello, and welcome to the storytelling workshop. The workshop runs every Saturday morning, so it won't interfere with your weekday commitments.
Each member is expected to prepare one true story from their own life to share with the group. In the final session, we record a two-minute piece for your portfolio, so please practise aloud beforehand. And here is a special offer: if you are a new member, your joining fee is waived for the first week. We hope to see you there.`,
    questions: [
      { id: "l-d10-q1", prompt: "[1] The workshop runs every [_____] morning.", answer: "Saturday" },
      { id: "l-d10-q2", prompt: "[2] Each member prepares one true [_____].", answer: "story" },
      { id: "l-d10-q3", prompt: "[3] The final session records a [_____]-minute piece.", answer: "2" },
      { id: "l-d10-q4", prompt: "[4] For new members, the fee is waived for the [_____] week.", answer: "first" }
    ]
  },

  "ielts21-d11": {
    voice: "en-GB-SoniaNeural",
    transcript: `Advisor: Good afternoon. Online Learning Centre. How can I help you register?
Caller: I'd like to sign up for a remote-working course.
Advisor: May I have your surname first?
Caller: It's Nguyen. N-G-U-Y-E-N.
Advisor: Thank you. Which course are you interested in?
Caller: I'd like the one on time management, because I really struggle to organise my day.
Advisor: Good choice. We offer weekday and weekend sessions. Which would you prefer?
Caller: I work on weekdays, so weekend sessions in the evenings would suit me best.
Advisor: Classes are capped at twenty-five students to keep things interactive. Is that fine with you?
Caller: Perfect.`,
    questions: [
      { id: "l-d11-q1", prompt: "[1] The caller's surname is [_____].", answer: "Nguyen" },
      { id: "l-d11-q2", prompt: "[2] The course chosen is about [_____] management.", answer: "time" },
      { id: "l-d11-q3", prompt: "[3] The preferred format is [_____] sessions in the evenings.", answer: "weekend" },
      { id: "l-d11-q4", prompt: "[4] Each class has a maximum of [_____] students.", answer: "25" }
    ]
  },

  "ielts21-d12": {
    voice: "en-GB-RyanNeural",
    transcript: `Student A: So, what did the workplace survey show?
Student B: For most employees, the most common arrangement was working from home three days a week. A couple of them tried four, but that was too much.
Student A: And what was the biggest problem those people reported?
Student B: Not the equipment, and not loneliness exactly. It was the boundaries between work and private life that people really struggled with.
Student A: Right. So maybe we should survey a new group?
Student B: Yes, I think new employees, because they have only just adjusted to these habits, so their experience would be really useful.`,
    questions: [
      { id: "l-d12-q1", prompt: "[1] What was the most common remote-working arrangement?", options: ["A. 2 days a week", "B. 3 days a week", "C. 4 days a week"], answer: "B" },
      { id: "l-d12-q2", prompt: "[2] What was the biggest reported problem?", options: ["A. Isolation", "B. Boundaries between work and private life", "C. Equipment"], answer: "B" },
      { id: "l-d12-q3", prompt: "[3] Which new group does Student B propose to survey?", options: ["A. New employees", "B. Middle managers", "C. Part-time staff"], answer: "A" }
    ]
  },

  "ielts21-d13": {
    voice: "en-GB-SoniaNeural",
    transcript: `Good morning, and welcome to the Digital News Conference. Here is today's programme. The conference officially opens at nine in the morning with registration and coffee.
Our keynote speaker is a journalist who writes for the technology section of a leading national newspaper, so she is perfectly placed to discuss how algorithms affect what we read. In the afternoon, we are running a workshop on how to fact-check information, which is essential in today's information environment.
Finally, the day ends with a question-and-answer session lasting thirty minutes, where you can put your questions directly to the panel. Thank you, and enjoy the conference.`,
    questions: [
      { id: "l-d13-q1", prompt: "[1] The conference opens at [_____] a.m.", answer: "9" },
      { id: "l-d13-q2", prompt: "[2] The keynote speaker writes for the [_____] section.", answer: "technology" },
      { id: "l-d13-q3", prompt: "[3] The afternoon workshop is about how to [_____] information.", answer: "fact-check" },
      { id: "l-d13-q4", prompt: "[4] The final Q&A session lasts [_____] minutes.", answer: "30" }
    ]
  },

  "ielts21-d14": {
    voice: "en-GB-LibbyNeural",
    transcript: `Receptionist: Good morning. Skills Assessment Centre. How can I help?
Student: Hi. I'd like to book a place on a mock test this week.
Receptionist: Certainly. We have a session on Saturday morning.
Student: Could you confirm my candidate number?
Receptionist: Of course. Your candidate number is A two hundred and five. Please write that down.
Student: When does the speaking test start?
Receptionist: The speaking part begins at one thirty in the afternoon.
Student: And what do I need to bring with me?
Receptionist: You must bring your student card, otherwise you won't be admitted.`,
    questions: [
      { id: "l-d14-q1", prompt: "[1] The mock test is on [_____] morning.", answer: "Saturday" },
      { id: "l-d14-q2", prompt: "[2] The candidate number is [_____].", answer: "A205" },
      { id: "l-d14-q3", prompt: "[3] The speaking test starts at [_____] in the afternoon.", answer: "1:30" },
      { id: "l-d14-q4", prompt: "[4] The learner must bring a [_____] to the venue.", answer: "student card" }
    ]
  },

  "ielts21-d15": {
    voice: "en-GB-RyanNeural",
    transcript: `Today's lecture examines the relationship between sleep and memory. Research shows that memory consolidation takes place most strongly during deep sleep, when the brain quietly replays what you learned during the day.
For adults, the evidence consistently recommends between seven and nine hours of sleep each night. Some people try to delay fatigue with caffeine, but this only postpones the problem and disturbs the sleep you need most.
A practical technique worth adopting is retrieval practice: instead of simply re-reading your notes, close the book and try to recall the content from memory. This simple habit significantly strengthens long-term retention.`,
    questions: [
      { id: "l-d15-q1", prompt: "[1] Memory consolidation is strongest during [_____] sleep.", answer: "deep" },
      { id: "l-d15-q2", prompt: "[2] Adults are advised to sleep [_____] hours a night.", answer: "7 to 9" },
      { id: "l-d15-q3", prompt: "[3] Overuse of [_____] is mentioned as a way to delay fatigue.", answer: "caffeine" },
      { id: "l-d15-q4", prompt: "[4] Recalling material from memory after learning is called [_____].", answer: "retrieval practice" }
    ]
  },

  "ielts21-d16": {
    voice: "en-GB-SoniaNeural",
    transcript: `Clerk: City Writing School. Good afternoon.
Student: Hello. I'd like to enrol in a writing course.
Clerk: Certainly. Let me find a class for you. We have spaces in Advanced Academic Writing.
Student: When does it run?
Clerk: On Wednesday afternoon and Thursday morning, every week.
Student: How much is the full course?
Clerk: The regular fee is three million dong, but we are offering a ten percent discount this month, so it comes to two million seven hundred thousand dong.
Student: Do I need to bring anything to the first class?
Clerk: Yes. Bring two sample essays, one argumentative and one descriptive, so your teacher can see your current level.`,
    questions: [
      { id: "l-d16-q1", prompt: "[1] The course taken is Advanced [_____] Writing.", answer: "Academic" },
      { id: "l-d16-q2", prompt: "[2] The class runs on [_____] afternoon and Thursday morning.", answer: "Wednesday" },
      { id: "l-d16-q3", prompt: "[3] After the 10% discount, the fee is [_____] dong.", answer: "2,700,000" },
      { id: "l-d16-q4", prompt: "[4] The teacher asks learners to bring two [_____] to the first class.", answer: "sample essays" }
    ]
  },

  "ielts21-d17": {
    voice: "en-GB-LibbyNeural",
    transcript: `Hello, everyone, and welcome to our pronunciation course. The course lasts six weeks in total, which we have found is enough time to build a solid new habit.
In the first session, we will concentrate on final consonants, because many learners drop sounds like the t in "part" or the s in "turns". Throughout the course you will be asked to record two minutes of speech every day and submit it through the app.
Finally, for those who wish to join the July group, applications must be received by the twenty-eighth of June. Thank you.`,
    questions: [
      { id: "l-d17-q1", prompt: "[1] The pronunciation course lasts [_____] weeks.", answer: "six" },
      { id: "l-d17-q2", prompt: "[2] The first session focuses on final [_____].", answer: "consonants" },
      { id: "l-d17-q3", prompt: "[3] Learners are asked to record [_____] minutes every day.", answer: "2" },
      { id: "l-d17-q4", prompt: "[4] The deadline for the July group applications is [_____].", answer: "28/6" }
    ]
  },

  "ielts21-d18": {
    voice: "en-GB-RyanNeural",
    transcript: `Student A: Do you want to report on the food-waste pilot project?
Student B: Sure. The trial was funded by a large supermarket chain, so the budget has been quite generous.
Student A: And how does the scheme actually work?
Student B: Participating stores reduce products near their expiry date by thirty percent between nine and ten in the evening.
Student A: That's clever. How is it going?
Student B: After six months, eight hundred households had joined the scheme.
Student A: How does the project measure its impact?
Student B: Participants log their savings through an app called FoodSense, which tracks how much waste they have prevented.`,
    questions: [
      { id: "l-d18-q1", prompt: "[1] The pilot food-waste project is funded by a [_____].", answer: "supermarket" },
      { id: "l-d18-q2", prompt: "[2] Stores cut prices by 30% between [_____] in the evening.", answer: "9 and 10" },
      { id: "l-d18-q3", prompt: "[3] After six months, [_____] households had joined.", answer: "800" },
      { id: "l-d18-q4", prompt: "[4] Participants are tracked through an app called [_____].", answer: "FoodSense" }
    ]
  },

  "ielts21-d19": {
    voice: "en-GB-SoniaNeural",
    transcript: `Professor: So, you have been analysing how students use AI tutors?
Student: Yes. The most common subject was programming, which made sense because students need instant feedback on code.
Professor: And how quickly do they get that feedback?
Student: The app provides feedback within thirty seconds, so students can fix their mistakes immediately.
Professor: What worried you?
Student: I am concerned that some students might use AI to cheat in exams, since the tool can produce complete answers in seconds.
Professor: How is the pilot group being selected?
Student: The university selected fifty students from the at-risk group, those who had failed a course or missed several assignments.`,
    questions: [
      { id: "l-d19-q1", prompt: "[1] Students use AI tutors most in [_____].", answer: "programming" },
      { id: "l-d19-q2", prompt: "[2] The app provides feedback within [_____] seconds.", answer: "30" },
      { id: "l-d19-q3", prompt: "[3] The professor worries that students might use AI to [_____] in exams.", answer: "cheat" },
      { id: "l-d19-q4", prompt: "[4] The pilot selects 50 students from the [_____] group.", answer: "at-risk" }
    ]
  },

  "ielts21-d20": {
    voice: "en-GB-RyanNeural",
    transcript: `Welcome to this final lecture on building a less congested city. The centrepiece of the plan is expanding public transport, which the mayor has identified as the single most effective measure.
A congestion charge will now apply to vehicles entering the central zone from seven o'clock in the morning until seven in the evening. Revenue from this charge will be reinvested in a new bus rapid transit route, allowing passengers to cross the city in under thirty minutes.
Early results are encouraging: after just two years, the number of cycling trips has increased by twenty-five percent. Thank you for your attention.`,
    questions: [
      { id: "l-d20-q1", prompt: "[1] The plan to reduce congestion prioritises expanding [_____].", answer: "public transport" },
      { id: "l-d20-q2", prompt: "[2] The charge to enter the centre applies from [_____] a.m.", answer: "7" },
      { id: "l-d20-q3", prompt: "[3] The revenue is invested in a new [_____] route.", answer: "bus rapid transit" },
      { id: "l-d20-q4", prompt: "[4] Cycling trips increased by [_____] after two years.", answer: "25%" }
    ]
  },

  "ielts21-d21": {
    voice: "en-GB-LibbyNeural",
    transcript: `Advisor: Final Review Office. Good afternoon.
Student: Hello. I'd like to book my end-of-course review session.
Advisor: Great. First, please complete the commitment form, sign it, and upload it before you receive the final assignment.
Student: What time is the review on the last day?
Advisor: The session begins at nine o'clock in the morning.
Student: And how do I submit my portfolio?
Advisor: You will upload everything through the online folder; we have stopped accepting printed copies.
Student: How long is the individual interview?
Advisor: Each student gets fifteen minutes, so please come well prepared to talk about your progress.`,
    questions: [
      { id: "l-d21-q1", prompt: "[1] Learners must complete the [_____] before receiving the final assignment.", answer: "commitment form" },
      { id: "l-d21-q2", prompt: "[2] The final review begins at [_____] in the morning.", answer: "9" },
      { id: "l-d21-q3", prompt: "[3] The portfolio is submitted through the [_____].", answer: "online folder" },
      { id: "l-d21-q4", prompt: "[4] The individual interview lasts [_____] minutes per person.", answer: "15" }
    ]
  },

  // ==================== FOUNDATION 14 ====================

  "foundation14-d11": {
    voice: "en-GB-LibbyNeural",
    transcript: `Receptionist: Learning Centre. How can I help?
Student: Hi. I'd like to book a study room for Thursday afternoon.
Receptionist: Let me check. We have Room 204 available at two thirty.
Student: Sorry, I've just remembered that one of our group members has a class on Thursday. Could I book Friday instead?
Receptionist: Yes. On Friday, Room 306 is free from two fifteen.
Student: That would be perfect. The room is for four students.
Receptionist: Fine. Please bring your student card when you collect the key. Food isn't allowed in the room, but you can bring water.
Student: Great. So that's Friday at two fifteen, Room 306.
Receptionist: That's right.`,
    questions: [
      { id: "f11-lq1", prompt: "[1] Day: [_____]. (Số từ/ngày)", answer: "Friday" },
      { id: "f11-lq2", prompt: "[2] Start time: [_____].", answer: "2:15" },
      { id: "f11-lq3", prompt: "[3] Room: [_____].", answer: "306" },
      { id: "f11-lq4", prompt: "[4] Number of students: [_____].", answer: "four" },
      { id: "f11-lq5", prompt: "[5] Item to bring: [_____].", answer: "student card" },
      { id: "f11-lq6", prompt: "[6] Drink allowed: [_____].", answer: "water" }
    ]
  }
};

export function getListeningScript(day, track) {
  return LISTENING_SCRIPTS[`${track}-d${String(day).padStart(2, '0')}`] || null;
}

export const LISTENING_DURATIONS = {
  "ielts21-d01": "00:46",
  "ielts21-d02": "00:36",
  "ielts21-d03": "00:42",
  "ielts21-d04": "00:43",
  "ielts21-d05": "00:39",
  "ielts21-d06": "00:37",
  "ielts21-d07": "00:47",
  "ielts21-d08": "00:11",
  "ielts21-d09": "00:36",
  "ielts21-d10": "00:19",
  "ielts21-d11": "00:44",
  "ielts21-d12": "00:40",
  "ielts21-d13": "00:43",
  "ielts21-d14": "00:45",
  "ielts21-d15": "00:39",
  "ielts21-d16": "00:43",
  "ielts21-d17": "00:40",
  "ielts21-d18": "00:41",
  "ielts21-d19": "00:42",
  "ielts21-d20": "00:38",
  "ielts21-d21": "00:47",
  "foundation14-d11": "00:56"
};