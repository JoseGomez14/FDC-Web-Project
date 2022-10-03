import { Container, ContainerColumn, ContainerGrid, GridItem } from "../../elements/Containers";
import { H2 } from '../../elements/Titles';
import LogoIETITC from '../../assets/images/logoIETITC.jpg';
import LogoOndas from '../../assets/images/logoOndas.png';
import LogoCornare from '../../assets/images/logoCornare.png';
import LogoMinciencias from '../../assets/images/logoMinCiencias.png';
import LogoMinAmbiente from '../../assets/images/logoMinAmbiente.png';
import LogoHatovial from '../../assets/images/logoHatovial.png';
import LogoVinus from '../../assets/images/logoVinus.png';
import LogoProdepaz from '../../assets/images/logoProdepaz.png';
import LogoStoDgo from '../../assets/images/logoStoDgo.png';

/**
 * Componente encargado de mostrar las entidades que apoyan o están relacionadas con el grupo de investigación
 * @param {*} id id del contenido 
 * @returns sección de contenido con las entidades aliadas al grupo FDC
 */
const Allies = ({ id }) => {
    const allies = [{ logo: LogoIETITC, large: false }, { logo: LogoOndas, large: true }, { logo: LogoCornare, large: false },
    { logo: LogoStoDgo, large: false }, { logo: LogoMinciencias, large: true }, { logo: LogoMinAmbiente, large: true },
    { logo: LogoHatovial, large: true }, { logo: LogoVinus, large: true }, { logo: LogoProdepaz, large: false }];

    return (<Container dark id={id}>
        <ContainerColumn style={{alignItems: 'start'}}>
            <H2 light>Aliados</H2>

            <ContainerGrid>
                {allies.map((item, index) => {
                return (
                    <GridItem key={'allies-' + index} large={item.large}>
                        <img src={item.logo}
                            alt="Logo entidad aliada"
                            loading="lazy"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                    </GridItem>);
                })}
            </ContainerGrid>
        </ContainerColumn>
    </Container>);
}

export default Allies;