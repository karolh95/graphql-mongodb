import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

@Resolver(of => StudentType)
export class StudentResolver {

	constructor(
		private studentService: StudentService
	) { }

	@Query(result => [StudentType])
	async students() {
		return this.studentService.getStudents();
	}

	@Mutation(returns => StudentType)
	async createStudent(
		@Args('createStudentInput') createStudentInput: CreateStudentInput
	) {
		return this.studentService.createStudent(createStudentInput);
	}
}