import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  findAll() {
    return this.personRepository.find();
  }

  async findOne(id: number) {
    const person = await this.personRepository.findOneBy({ id });
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return person;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  async remove(id: number) {
    console.log('remove');
    const person = await this.personRepository.findOneBy({ id });
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return this.personRepository.remove(person);
  }
}
