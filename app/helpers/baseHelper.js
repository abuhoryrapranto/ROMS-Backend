var slugify = require('slugify')

async function generateSlug(model, data){
    let slug = slugify(data, {
        replacement: '-',
        remove: undefined,
        lower: true,
        strict: false,
        locale: 'vi',
        trim: true
      });
    
    const found = await model.findOne({ where: { slug: slug } });
    if(found) {
        let count = 0;
        let newSlug = '';
        do{
            count++;
            newSlug = slug+'-'+count;
        }while(await model.findOne({ where: { slug: newSlug } }));

        return newSlug;
    }else {
        return slug;
    }
}

module.exports = {
    generateSlug : generateSlug
}