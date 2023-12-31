import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsModel } from './entities/posts.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ // Repository 주입시
      // 불러오고 싶은 모델 전부 넣기
      PostsModel,
    ]),
    AuthModule,
    UsersModule,
  ],
  controllers: [PostsController], // 클래스를 넣는것. 인스턴스 X
  providers: [PostsService], // 클래스를 넣는것. 인스턴스 X
})
export class PostsModule {}
