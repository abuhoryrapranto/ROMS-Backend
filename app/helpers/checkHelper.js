const uniqueEmail = async function(model, email) {
    const existEmail = await model.findOne({ where: { email: email } });
    if(existEmail) return true;
    return false;
}

const uniquePhone = async function(model, phone) {
    const existPhone = await model.findOne({ where: { phone: phone } });
    if(existPhone) return true;
    return false;
}

module.exports = {
    uniqueEmail : uniqueEmail,
    uniquePhone : uniquePhone
}