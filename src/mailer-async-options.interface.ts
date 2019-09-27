import { ModuleMetadata } from '@nestjs/common/interfaces';

import { MailerOptions } from '@eropple/rx-mailer';

export interface MailerAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: Array<any>;
  useFactory: (...args: Array<any>) => Promise<MailerOptions> | MailerOptions;
}
