import { Inject } from '@nestjs/common';

import { RxMailerInject } from './inject';

export const RxMailer = () => Inject(RxMailerInject.Mailer);
