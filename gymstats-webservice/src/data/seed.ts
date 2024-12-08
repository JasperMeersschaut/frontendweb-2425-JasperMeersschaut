import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../core/password';
import Role from '../core/roles';
const prisma = new PrismaClient();

async function main() {
  try {
    const passwordHash = await hashPassword('12345678');
    console.log('Creating exercises...');

    await prisma.exercise.createMany({
      data: [
        {
          id: 1,
          type: 'Alternating Hammer Curl',
          muscleGroup: 'Arms',
          description: 'An effective exercise for targeting the brachialis and brachioradialis muscles. \
          It involves alternating curls with a hammer grip.',
        },
        {
          id: 2,
          type: 'Barbell Skullcrusher',
          muscleGroup: 'Arms',
          description: 'A tricep exercise performed with a barbell, focusing on the long head of the triceps. \
          It is done lying on a bench and lowering the barbell to the forehead.',
        },
        {
          id: 3,
          type: 'Cable Hammer Curl',
          muscleGroup: 'Arms',
          description: 'A variation of the hammer curl using a cable machine. \
          It targets the brachialis and brachioradialis muscles.',
        },
        {
          id: 4,
          type: 'Dumbell Single Arm Tricep Extension',
          muscleGroup: 'Arms',
          description: 'An isolation exercise for the triceps, performed with a dumbbell.\
           It involves extending the arm overhead and lowering the dumbbell behind the head.',
        },
        {
          id: 5,
          type: 'EZ-Bar Bicep Curl',
          muscleGroup: 'Arms',
          description: 'A bicep exercise performed with an EZ-bar, which allows for a more comfortable grip.\
           It targets the biceps brachii.',
        },
        {
          id: 6,
          type: 'EZ-Bar Preacher Curl',
          muscleGroup: 'Arms',
          description: 'A bicep exercise performed on a preacher bench with an EZ-bar. \
          It isolates the biceps and reduces momentum.',
        },
        {
          id: 7,
          type: 'Hammer Curl',
          muscleGroup: 'Arms',
          description: 'A bicep exercise that targets the brachialis and brachioradialis muscles. \
          It is performed with a neutral grip.',
        },
        {
          id: 8,
          type: 'Seated Dumbell Bicep Curl',
          muscleGroup: 'Arms',
          description: 'A bicep exercise performed while seated,\
           which helps to isolate the biceps and reduce momentum.',
        },
        {
          id: 9,
          type: 'Assisted Pull-up',
          muscleGroup: 'Back',
          description: 'A back exercise performed with assistance to help complete pull-ups. \
          It targets the latissimus dorsi and other back muscles.',
        },
        {
          id: 10,
          type: 'Barbell Bent Over Row',
          muscleGroup: 'Back',
          description: 'A compound exercise that targets the back muscles, \
          including the latissimus dorsi and rhomboids. It is performed with a barbell.',
        },
        {
          id: 11,
          type: 'Barbell Deadlift',
          muscleGroup: 'Back',
          description: 'A full-body exercise that primarily targets the back, \
          glutes, and hamstrings. It is performed with a barbell.',
        },
        {
          id: 12,
          type: 'Cable Rear Delt Fly',
          muscleGroup: 'Back',
          description: 'An isolation exercise for the rear deltoids,\
           performed with a cable machine. It helps to improve shoulder stability and posture.',
        },
        {
          id: 13,
          type: 'Dumbell Single Arm Rows',
          muscleGroup: 'Back',
          description: 'A unilateral exercise that targets the back muscles,\
           including the latissimus dorsi and rhomboids. It is performed with a dumbbell.',
        },
        {
          id: 14,
          type: 'Lat Pulldown',
          muscleGroup: 'Back',
          description: 'A back exercise performed on a lat pulldown machine. \
          It targets the latissimus dorsi and other upper back muscles.',
        },
        {
          id: 15,
          type: 'Pull-up',
          muscleGroup: 'Back',
          description: 'A bodyweight exercise that targets the back muscles, \
          including the latissimus dorsi and rhomboids. It is performed by pulling up to a bar.',
        },
        {
          id: 16,
          type: 'Seated Cable Row',
          muscleGroup: 'Back',
          description: 'A back exercise performed on a cable machine. \
          It targets the latissimus dorsi, rhomboids, and other back muscles.',
        },
        {
          id: 17,
          type: 'Seated Rear Delt Fly',
          muscleGroup: 'Back',
          description: 'An isolation exercise for the rear deltoids, performed while seated.\
           It helps to improve shoulder stability and posture.',
        },
        {
          id: 18,
          type: 'Bench Press',
          muscleGroup: 'Chest',
          description: 'A compound exercise that targets the chest muscles, including the pectoralis major.\
           It is performed with a barbell or dumbbells.',
        },
        {
          id: 19,
          type: 'High Cable Chest Fly',
          muscleGroup: 'Chest',
          description: 'An isolation exercise for the chest, performed on a cable machine.\
           It targets the upper portion of the pectoralis major.',
        },
        {
          id: 20,
          type: 'Dumbell Chest Fly',
          muscleGroup: 'Chest',
          description: 'An isolation exercise for the chest, performed with dumbbells. \
          It targets the pectoralis major and helps to improve chest definition.',
        },
        {
          id: 21,
          type: 'Dumbell Incline Bench Press',
          muscleGroup: 'Chest',
          description: 'A compound exercise that targets the upper chest muscles.\
           It is performed with dumbbells on an incline bench.',
        },
        {
          id: 22,
          type: 'Dumbell Incline Chest Fly',
          muscleGroup: 'Chest',
          description: 'An isolation exercise for the upper chest, performed with dumbbells on an incline bench.\
           It targets the upper portion of the pectoralis major.',
        },
        {
          id: 23,
          type: 'Barbell Overhead Press',
          muscleGroup: 'Shoulders',
          description: 'A compound exercise that targets the shoulder muscles, including the deltoids. \
           It is performed with a barbell.',
        },
        {
          id: 24,
          type: 'Battle Rope Slam',
          muscleGroup: 'Shoulders',
          description: 'A dynamic exercise that targets the shoulders and core muscles.  \
          It is performed with battle ropes.',
        },
        {
          id: 25,
          type: 'Cable Face Pull',
          muscleGroup: 'Shoulders',
          description: 'An isolation exercise for the rear deltoids, performed on a cable machine. \
          It helps to improve shoulder stability and posture.',
        },
        {
          id: 26,
          type: 'Cable Front Delt Raise',
          muscleGroup: 'Shoulders',
          description: 'An isolation exercise for the front deltoids, performed on a cable machine. \
          It helps to improve shoulder strength and definition.',
        },
        {
          id: 27,
          type: 'Cable Upright Row',
          muscleGroup: 'Shoulders',
          description: 'A compound exercise that targets the shoulder muscles, including the deltoids and trapezius. \
          It is performed on a cable machine.',
        },
        {
          id: 28,
          type: 'Dumbell Lateral Raise',
          muscleGroup: 'Shoulders',
          description: 'An isolation exercise for the lateral deltoids, performed with dumbbells. \
          It helps to improve shoulder width and definition.',
        },
        {
          id: 29,
          type: 'Rear Delt Pec Deck Fly',
          muscleGroup: 'Shoulders',
          description: 'An isolation exercise for the rear deltoids, performed on a pec deck machine. \
          It helps to improve shoulder stability and posture.',
        },
        {
          id: 30,
          type: 'Seated Dumbell Shoulder Press',
          muscleGroup: 'Shoulders',
          description: 'A compound exercise that targets the shoulder muscles, including the deltoids. \
          It is performed with dumbbells while seated.',
        },
      ],
    });
    console.log('Created exercises');

    console.log('Creating users...');
    await prisma.user.createMany({
      data: [
        {
          id: 1,
          name: 'Jasper',
          lastName: 'Meersschaut',
          email: 'meersschaut.jasper@gmail.com',
          sex: 'Male',
          birthdate: new Date('2005-01-16'),
          length: 177,
          weight: 73,
          password_hash: passwordHash,
          roles: JSON.stringify([Role.ADMIN, Role.USER]),
        },
        {
          id: 2,
          name: 'Marie',
          lastName: 'Dubois',
          email: 'marie.dubois@example.com',
          sex: 'Female',
          birthdate: new Date('1985-05-15'),
          length: 165,
          weight: 60.0,
          password_hash: passwordHash,
          roles: JSON.stringify([Role.USER]),
        },
      ],
    });
    console.log('Created users');

    console.log('Creating workouts...');
    await prisma.workout.createMany({
      data: [
        {
          id: 1,
          type: 'Push',
          duration: 120,
          muscleFocus: 'Upper Body',
          createdBy: null,
        },
        {
          id: 2,
          type: 'Pull',
          duration: 90,
          muscleFocus: 'Upper Body',
          createdBy: 1,
        },
        {
          id: 3,
          type: 'Workout3',
          duration: 250,
          muscleFocus: 'Lower Body',
          createdBy: 2,
        },
        {
          id: 4,
          type: 'lopen',
          duration: 15,
          muscleFocus: 'Cardiovascular',
          createdBy: null,
        },
      ],
    });

    await prisma.workout.update({
      where: { id: 1 },
      data: {
        items: {
          connect: [
            { id: 21 },
            { id: 21 },
            { id: 19 },
            { id: 30 },
            { id: 28 },
            { id: 4 },
            { id: 2 },
          ],
        },
      },
    });

    await prisma.workout.update({
      where: { id: 2 },
      data: {
        items: {
          connect: [
            { id: 16 },
            { id: 14 },
            { id: 17 },
            { id: 1 },
            { id: 6 },
          ],
        },
      },
    });

    await prisma.workout.update({
      where: { id: 3 },
      data: {
        items: {
          connect: [
            { id: 16 },
            { id: 14 },
            { id: 17 },
            { id: 1 },
            { id: 6 },
          ],
        },
      },
    });

    await prisma.workout.update({
      where: { id: 4 },
      data: {
        items: {
          connect: [
            { id: 11 },
            { id: 6 },
          ],
        },
      },
    });

    console.log('Creating user workouts...');
    // Create User Workouts
    // const userWorkout1 = await prisma.userWorkout.create({
    //   data: {
    //     userId: user1.id,
    //     workoutId: workout1.id,
    //     date: new Date(),
    //     notes: 'Great workout!',
    //   },
    // });
    // console.log('Created user workout for Jan Jansen');

    // const userWorkout2 = await prisma.userWorkout.create({
    //   data: {
    //     userId: user2.id,
    //     workoutId: workout2.id,
    //     date: new Date(),
    //     notes: 'Felt strong today!',
    //   },
    // });
    // console.log('Created user workout ');

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
