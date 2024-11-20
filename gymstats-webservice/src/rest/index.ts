import Router from '@koa/router';
import installExerciseRouter from './exercise';
import installUserRouter from './user';
import installWorkoutRouter from './workout';
import installSessionRouter from './session';
import type { GymStatsAppContext, GymStatsAppState, KoaApplication } from '../types/koa';

export default (app: KoaApplication) => {
  const router = new Router<GymStatsAppState, GymStatsAppContext>({
    prefix: '/api',
  });

  installExerciseRouter(router);
  installUserRouter(router);
  installWorkoutRouter(router);
  installSessionRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
