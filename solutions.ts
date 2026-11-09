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

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error('Access Denied: Must be 18 or older'));
      return;
    }

    setTimeout(() => {
      resolve('Access Granted');
    }, 1000);
  });
}
