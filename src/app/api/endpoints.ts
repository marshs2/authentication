export class Endpoints {
    static getEndpoints() { 
        return {
            'base': 'https://user-authentication-api.now.sh',
            'signup': '/api/users',
            'login': '/api/users/authenticate'
        }
    }
}