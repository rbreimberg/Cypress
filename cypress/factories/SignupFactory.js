var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '06530101',
                street: 'Rua Onofre',
                number: '27',
                details: 'Ap 2',
                district: 'Vila Campos (Fazendinha)',
                city_state: 'Santana de Parnaíba/SP'

            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        return data
    }
}