import React from 'react';
import { Link } from 'wouter';
import styles from '../css/EstiloCard.module.css'

export const CardCharacter = ({ character }) => {
    return <>
        <li className={styles.modeCard} key={character.id}>
            <Link to={`/detalle/${character.id}`}>
                <img
                    width={230}
                    height={345}
                    className={styles.modeImage}
                    src={character.image}
                />
                <div>
                    {character.name}
                </div>
            </Link>
        </li>
    </>;
};
