/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CurriculumLevel {
  level: string;
  title: string;
  subtitle?: string;
  description: string;
  duration?: string;
  lessons: {
    title: string;
    duration?: string;
    isHeader?: boolean;
    isCheck?: boolean;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
