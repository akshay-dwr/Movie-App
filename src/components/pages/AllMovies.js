import MovieList from "../movies/MovieList";
import StatefulComponent from "./StatefulComponent";

const MOVIE_DATA = [
    {   
        id:"movie1",
        title:"Inception",
        image:"http://2.bp.blogspot.com/-6iivWDfBd3k/UXDZbTkxwwI/AAAAAAAAAHY/bvK-aDceb8o/s1600/Inception-inception-2010-14355477-1680-1050.jpg",
        imdb:"8.8",
        description:"A thief (Leonardo DiCaprio) who enters people's dreams and steals their secrets gets a shot at redemption when he is given the dangerous task of planting an idea in someone's subconscious."
    },
    {
        id:"movie2",
        title:"SeethaRamam",
        image:"https://www.siasat.com/wp-content/uploads/2022/08/sggwghh4.jpg",
        imdb:"7.9",
        description:"Sita Ramam is a 2022 Indian Telugu-language period musical romantic drama film written and directed by Hanu Raghavapudi and produced by Vyjayanthi Movies and Swapna Cinema. "
    },
    {
        id:"movie3",
        title:"Rocketry",
        image:"https://price4india.com/wp-content/uploads/2021/04/Rocketry-1.jpg",
        imdb:"9.1",
        description:"East Indian aerospace engineer Nambi Narayanan faces charges of espionage."
    },
    {
        id:"movie4",
        title:"KGF chapter2",
        image:"https://i.ytimg.com/vi/0NZKW9M7xb8/maxresdefault.jpg",
        imdb:"8.4",
        description:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order, and Rocky must battle threats from all sides."
    }


]


function AllMovies()
{
    return(
        <div>
            <h1>All Movies Page</h1>
            <StatefulComponent/>
             <MovieList movies={MOVIE_DATA}/>
        </div>
    )
}
export default AllMovies;
export {MOVIE_DATA};