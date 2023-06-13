const Nota = require('./models/nota');

describe('Deve retornar o conceito final com base nas notas a1, a2 e a3', () => {
    it('Deve retornar a mensão "SS" para a média final que ficar entre 9.0 e 10.0', () => {
        const nota = new Nota('Matemática', 9, 9, 9.5); // Média final 9.3
        expect(nota.mediaCA()).toBe('SS');
    });

    it('Deve retornar a mensão "MS" para a média final que ficar entre 7.0 e 8.9', () => {
        const nota = new Nota('Matemática', 7, 8, 8.5); // Média final 8.3
        expect(nota.mediaCA()).toBe('MS');
    });

    it('Deve retornar a mensão "MM" para a média final que ficar entre 5.0 e 6.9', () => {
        const nota = new Nota('Matemática', 5, 6.5, 6.5); // Média final 6.5
        expect(nota.mediaCA()).toBe('MM');
    });

    it('Deve retornar a mensão "MI" para a média final que ficar entre 3.0 e 4.9', () => {
        const nota = new Nota('Matemática', 3, 3.5, 4.5); // Média final 4.1
        expect(nota.mediaCA()).toBe('MI');
    });

    it('Deve retornar a mensão "II" para a média final que ficar entre 0.1 e 2.9', () => {
        const nota = new Nota('Matemática', 0.1, 1, 2.5); // Média final 1.9
        expect(nota.mediaCA()).toBe('II');
    });

    it('Deve retornar a mensão "SR" para a média final que ficar abaixo de 0.1', () => {
        const nota = new Nota('Matemática', 0, 0, 0); // Média final 0.0
        expect(nota.mediaCA()).toBe('SR');
    });
});