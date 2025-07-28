import React from 'react';
 
 
const AboutHero = (props) => {
    return (
        <>
        <div className='bg-cover bg-center h-[730px] m- m-'style={{ backgroundImage: `url(${props.Img})` }}>
        <div className='text-center pt-8 text-4xl font-bold text-white'>
            <h1>Minha experiência</h1>
            <p></p>
            
        <div className='text-center pt-8 text-4xl font-bold text-white '>
            <p>SenacTec está sendo um curso muito interessante e inovador para meus pensamentos, aqui no curso, conheci novos amigos e estou conversando com mais pessoas, estou estudando programação, aprendi html e css quando comecei, depois aprendi react jsx e tailwind css, aprendendo a fazer paginas, criar botoes e animações diferentes, alem de aprender a apresentar trabalhos</p>
        </div>
        </div>
        </div>
        </>
    );
};
 
export default AboutHero;
 