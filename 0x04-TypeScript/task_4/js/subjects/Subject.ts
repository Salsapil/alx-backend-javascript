/// <reference path="./Teacher.ts"/>

namespace Subjects {
    export abstract class Subject {
        teacher: Teacher;
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}