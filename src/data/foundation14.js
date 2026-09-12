// IELTS Marathon - Lộ trình Nền tảng 14 Ngày (Foundation 14 Days)
// Aggregator ghép các chunk ngày thành toàn bộ track Foundation 14 Ngày.

import { FOUNDATION_DAYS_1_7 } from './foundation14-days1to7.js';
import { FOUNDATION_DAYS_8_14 } from './foundation14-days8to14.js';

export const FOUNDATION_14_DAYS = [
  ...FOUNDATION_DAYS_1_7,
  ...FOUNDATION_DAYS_8_14
];