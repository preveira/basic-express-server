'use strict';

class Collection {
    constructor(model) {
        this.model = model;
    }

    async read(id) {
        try {
            if(id) {
              return this.model.findOne({where: {id: id}});
            } else {
              return this.model.findAll();
            }
        } catch(err) {
            console.log('ERROR ON READ FOR', this.model.name);
            throw new Error(err);
        }
    }
    async create(json) {
        try {
            return this.model.create(json);
        } catch(err) {
            console.log('ERROR ON CREATE FOR', this.model.name);
            throw new Error(err);
        }
    }
    async update(id, json) {
        try {
            let record = await this.model.findByPk(id);
            let updateRecord = await record.update(json);
            return updateRecord;
        } catch(err) {
            console.log('ERROR ON UPDATE FOR', this.model.name);
            throw new Error(err);
        }
    }
    async delete(id) {
        try {
            return this.model.destroy({ where: {id: id }});
        } catch(err) {
            console.log('ERROR ON UPDATE FOR', this.model.name);
            throw new Error(err);
        }
    }

}

module.exports = Collection;