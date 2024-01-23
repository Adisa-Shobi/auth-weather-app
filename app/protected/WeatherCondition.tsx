import { StaticImageData } from 'next/image';
import clear from '../public/clear.png'
import cloud from '../public/cloud.png'
import mist from '../public/mist.png'
import rain from '../public/rain.png'
import snow from '../public/snow.png'
import errImg from '../public/404.png'
import Image from 'next/image'

interface WeatherConditionProps {
    condition: string;

}

const WeatherCondition: React.FC<WeatherConditionProps> = ({ condition }) => {
    let weatherIcon: StaticImageData;

    switch (condition) {
        case 'Clear':
            weatherIcon = clear;
            break;
        case 'Rain':
            weatherIcon = rain;
            break;
        case 'Snow':
            weatherIcon = snow;
            break;
        case 'Clouds':
            weatherIcon = cloud;
            break;
        case 'Mist':
            weatherIcon = mist;
            break;
        default:
            weatherIcon = errImg;
            break;
    }
    return (
        <Image src={weatherIcon} alt="Weather Icon" className="h-40 w-40 mr-2" />

    );

};

export default WeatherCondition;