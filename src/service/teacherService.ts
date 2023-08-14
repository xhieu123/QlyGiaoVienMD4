import {AppDataSource} from "../data-source";
import {Teacher} from "../entity/teacher";
import {Between, Like} from "typeorm";

class TeacherService{
    private teacherRepository = AppDataSource.getRepository(Teacher)

    add1 = async (data) =>{
        return await this.teacherRepository.save(data)
    }
    delete1 = async (id)=>{
        return await this.teacherRepository.delete(id)
    }
    update1 = async (id, data) => {
        return await this.teacherRepository.update(id, data);
    }
    findAll1 = async ()=>{
        return await this.teacherRepository.find()
    }
    findByName1 = async (name)=>{
        return await this.teacherRepository.find({
            where:{
                name : Like(`%${name}%`)
            }
        })
    }
    findByAgeRank1 = async (minAge:number,maxAge:number)=>{
        return await this.teacherRepository.find({
            where:{
                age : Between(minAge,maxAge)
            }
        })
    }

    findBySalaryRank1 = async (minSalary:number,maxSalary:number)=>{
        return await this.teacherRepository.find({
            where:{
                age : Between(minSalary,maxSalary)
            }
        })
    }
    findAll = async () => {
        return await this.teacherRepository.find();
    }

}
export default new TeacherService();