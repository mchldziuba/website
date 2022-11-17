import React, { FC } from 'react';
import { DevIcon } from './DevIcon';
import { FacebookIcon } from './FacebookIcon';
import { GithubIcon } from './GitHubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import './Icon.scss';

interface IconProps {
    size: string;
    name: 'linkedin' | 'facebook' | 'github' | 'dev';
}

export const Icon: FC<IconProps> = ({ name, size }) => {
    switch(name) {
        case 'facebook':
            return <FacebookIcon size={size} />
        case 'dev':
            return <DevIcon size={size} />
        case 'github':
            return <GithubIcon size={size} />
        case 'linkedin':
            return <LinkedinIcon size={size} />
    }
}