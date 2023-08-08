interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 223,
    song: "Warning",
    details: {
        author: "Green Day",
        year: 2000
    }
}

const { song, songDuration, details: {author, year} } = audioPlayer;

console.log(`${song} - ${author} - ${songDuration} - year: ${year}`);

const dbz = ['Goku', 'Vegeta', 'Trunks'];

const [,,trunks = 'Not found'] = dbz; // si no se encuentra en la tercera posición, se lanza el mensaje "Not found"

console.log(trunks);

export {}