import teacherService from "../service/teacherService";

class TeacherController {
    private teacherService;

    constructor() {
        this.teacherService = teacherService;
    }

    add = async (req, res) => {
        let data = await this.teacherService.add1(req.body)
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.teacherService.update1(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.teacherService.delete1(req.params.id);
        res.json(data)
    }
    findByName = async (req, res) => {
        let data = await this.teacherService.findByName1(req.query.name);
        res.json(data)
    }
    findByAgeRank = async (req, res) => {
        let {minAge, maxAge} = req.query
        let data = await this.teacherService.findByAgeRank1(Number(minAge), Number(maxAge))
        res.json(data)
    }
    findBySalaryRank = async (req, res) => {
        let {minSalary, maxSalary} = req.query
        let data = await this.teacherService.findBySalaryRank1(Number(minSalary), Number(maxSalary))
        res.json(data)
    }
    findAll = async (req, res) => {
        let list
        if (req.query.name) {
            list = await this.teacherService.findByName1(req.query.name)
        } else if (req.query.minAge && req.query.maxAge) {
            list = await this.teacherService.findByAgeRank1(Number(req.query.minAge), Number(req.query.maxAge))
        }else if (req.query.minSalary && req.query.maxSalary) {
            list = await this.teacherService.findBySalaryRank1(Number(req.query.minSalary), Number(req.query.maxSalary))
        }else {
            list = await this.teacherService.findAll()
        }
        res.json
    }
}

export default new TeacherController();