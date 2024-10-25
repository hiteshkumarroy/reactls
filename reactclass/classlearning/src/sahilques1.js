
const courses1 = [
  { title: "Course A", instructor: "Instructor 1", duration: 4, difficulty: "Intermediate" },
  { title: "Course B", instructor: "Instructor 2", duration: 6, difficulty: "Beginner" }
];

const courses2 = [
  { title: "Course C", instructor: "Instructor 3", duration: 5, difficulty: "Advanced" },
  { title: "Course D", instructor: "Instructor 4", duration: 7, difficulty: "Beginner" }
];


const mergedCourses = [...courses1, ...courses2];


const filteredCourses = mergedCourses.filter(course => course.duration >= 5);

// Step 3: Increase the duration of each remaining course by 1 hour
const updatedCourses = filteredCourses.map(course => ({
  ...course,
  duration: course.duration + 1
}));

// Step 4: Find the first course with "Beginner" difficulty
const firstBeginnerCourse = updatedCourses.find(course => course.difficulty === "Beginner");

// Step 5: Check if all remaining courses have a duration of at least 6 hours
const allCoursesAtLeast6Hours = updatedCourses.every(course => course.duration >= 6);

console.log("Updated Courses:", updatedCourses);
console.log("First Beginner Course:", firstBeginnerCourse);
console.log("All courses have duration >= 6 hours:", allCoursesAtLeast6Hours);