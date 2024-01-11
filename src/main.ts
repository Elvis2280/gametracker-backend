import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestFactory.create() creates an instance of the Nest application

  app.useGlobalPipes(new ValidationPipe()); // app.useGlobalPipes() sets up a global validation pipe that uses the class-validator package

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gametracker API')
    .setDescription("Gametracker API's documentation")
    .setVersion('1.0')
    .addServer('http://localhost:8080/', 'Local environment')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument); // SwaggerModule.setup() sets up the Swagger module to expose the Swagger UI

  await app.listen(3000); // app.listen() starts the application on port 3000 on docker but local is 8080
}
bootstrap();
