function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}

type ProcessType = string | number | boolean;

function processInput(value: ProcessType): string | number {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    if (value) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }
}

function formatCoordinate([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const emptyArray: T[] = [];

  const concatItems = emptyArray.concat(...arrays);
  return concatItems;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const courseData = courses.filter(
    el => el.isPublished === true && el.students >= minStudents,
  );

  return courseData;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const pluckedValues = items.map(el => el[key]);
  return pluckedValues;
}
