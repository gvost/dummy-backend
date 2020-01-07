const data = [{
    firstName: 'Harold',
    lastName: 'Bir',
    title: 'doctor',
    location: 'GLN2521',
    color: '#C042D4'
}, {
    firstName: 'Britney',
    lastName: 'Birak',
    title: 'physical therapist',
    location: 'GLN2588',
    color: '#054E81'
}, {
    firstName: 'Matt',
    lastName: 'Birch',
    title: 'speech pathologist',
    location: 'GLN4586',
    color: '#2C9FB2'
}, {
    firstName: 'Louise',
    lastName: 'Birchwood',
    title: 'Nurse',
    location: 'FLN2521',
    color: '#16D238'
}];

const userData = {
    userName: 'testUser',
    password: 'password'
};

const patientData = [{
    last_published: 'Sun Jan 05 2020 06:00:00 GMT-0600 (Central Standard Time)',
    firstName: 'Kristopher',
    lastName: 'Cantu',
    mrn: '4939201',
    admission_date: 'Mon Jan 06 2020 15:28:21 GMT-0600 (Central Standard Time)',
    attending_physican: 'Glen Song',
    medical_service: 'brain injury',
    innovation_center: 'brain',
    location: 'GLN2521',
    status: 'active',
    functional_categories: {
        eating: {
            current: 5,
            typical: 7,
            goal: 6
        },
        oral_hygiene: {
            current: 3,
            typical: 4,
            goal: 5
        },
        toilet_hygiene: {
            current: 4,
            typical: 6,
            goal: 6
        },
        shower_self: {
            current: 3,
            typical: 5,
            goal: 7
        },
        dressing_ub: {
            current: 3,
            typical: 5,
            goal: 7
        },
        dressing_lb: {
            current: 3,
            typical: 5,
            goal: 7
        },
        putting_on_footwear: {
            current: 3,
            typical: 5,
            goal: 7
        }
    },
    qi_goals: {
        eating: {
            current: 5,
            typical: 7,
            goal: 6
        },
        oral_hygiene: {
            current: 3,
            typical: 4,
            goal: 5
        },
        toilet_hygiene: {
            current: 4,
            typical: 6,
            goal: 6
        },
        shower_self: {
            current: 3,
            typical: 5,
            goal: 7
        },
        dressing_ub: {
            current: 3,
            typical: 5,
            goal: 7
        },
        dressing_lb: {
            current: 3,
            typical: 5,
            goal: 7
        },
        putting_on_footwear: {
            current: 3,
            typical: 5,
            goal: 7
        }
    },
    patient_traits: {
        expected_balance_level: 4,
        expected_los: '24-30 days'
    }
}]

module.exports = {
    data,
    userData
}