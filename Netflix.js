import React from 'react';
import Card from './Card';
import NetflixData from '../netflixApp/NetflixData';
const Netflix = () => {
    const nCard = (val) =>{
        return(
             <Card 
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            links={val.link}
        /> 
        );
    }
    return (
        <React.Fragment>
        <h1 className="heading_style">Top 10 Netflix Original Series 2021</h1>
       
        {NetflixData.map(nCard)}
        {/* <Card 
           imgsrc={NetflixData[1].imgscr}
            title={NetflixData[1].title}
            sname={NetflixData[1].sname}
            links={NetflixData[1].link}
        /> 
        <Card 
            imgsrc={NetflixData[2].imgscr}
            title={NetflixData[2].title}
            sname={NetflixData[2].sname}
            links={NetflixData[2].link}
        /> 
        <Card 
            imgsrc={NetflixData[3].imgscr}
            title={NetflixData[3].title}
            sname={NetflixData[3].sname}
            links={NetflixData[3].link}
        /> 
        <Card 
            imgsrc={NetflixData[4].imgscr}
            title={NetflixData[4].title}
            sname={NetflixData[4].sname}
            links={NetflixData[4].link}
        /> 
        <Card 
            imgsrc={NetflixData[5].imgscr}
            title={NetflixData[5].title}
            sname={NetflixData[5].sname}
            links={NetflixData[5].link}
        />  */}
        </React.Fragment>
    )
}

export default Netflix;
