import { Get, Module } from '@nestjs/common';
import { PremierController } from './premier.controller';

@Module({
  controllers: [PremierController],
})
export class PremierModule {
  // This is the constructor for the PremierModule class.
}
