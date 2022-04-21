// libraries
import React from 'react';

// JS
import {
    Container,
    IconArea,
    Icon,
    Label,
} from './buttonStyles';

type Props = {
    label: string;
    icon: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button: React.FC <Props> = ({ label, icon, onClick }: Props) => (
    <Container onClick={onClick}>
        {icon
            && (
                <IconArea>
                    <Icon src={icon} />
                </IconArea>
            )}
        <Label>{label}</Label>
    </Container>
);

export default Button;
