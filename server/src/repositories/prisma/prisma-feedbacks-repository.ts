import { prisma } from '../../prisma';
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from './../feedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: FeedbackCreateData) {
    const { comment, type, screenshot } = data;
    await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot,
      },
    });
  }
}
