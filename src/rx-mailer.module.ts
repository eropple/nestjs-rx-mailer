import { DynamicModule, FactoryProvider, Provider } from '@nestjs/common/interfaces';
import { MailerOptions, Mailer } from '@eropple/rx-mailer';

import { MailerAsyncOptions } from './mailer-async-options.interface';
import { RxMailerInject } from './inject';

export class RxMailerModule {
  // TODO: this doesn't support the `useClass` or `useValue` options because,
  //       frankly...I don't care.
  public static forRootAsync(options: MailerAsyncOptions): DynamicModule {
    const optionsProvider: Provider = RxMailerModule.createFactoryProvider(options);
    const mailerProvider: FactoryProvider = {
      provide: RxMailerInject.Mailer,
      inject: [RxMailerInject.Options],
      useFactory: (options: MailerOptions) => new Mailer(options),
    };

    return {
      imports: [
        ...options.imports || []
      ],
      module: RxMailerModule,
      providers: [
        optionsProvider,
        mailerProvider,
      ],
      exports: [
        mailerProvider,
      ],
    };
  }

  private static createFactoryProvider(options: MailerAsyncOptions): FactoryProvider {
    return {
      provide: RxMailerInject.Options,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };
  }
}
