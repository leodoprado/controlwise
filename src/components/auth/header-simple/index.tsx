import { ContentHeaderContainer, NavigationLinks } from './style';

interface HeaderSimpleProps {
    title: string;
}

const HeaderSimple: React.FC<HeaderSimpleProps> = ({ title }) => {

    return (
        <ContentHeaderContainer>
            <NavigationLinks>
                <h1>{ title }</h1>
            </NavigationLinks>
        </ContentHeaderContainer>
    );
}

export default HeaderSimple;
