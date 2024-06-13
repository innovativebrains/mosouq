import React from "react";

import { Container } from "react-bootstrap";

import SearchBar from "../../components/searchbar";

const DealsHeader =()=>{
    return(
        <Container>

            <div className="text-center mt-5">
                <h2>
                    Deals
                </h2>

                <p>
                    Find the best companies in this category!
                </p>
            </div>
            
            <SearchBar />
        </Container>
    )
}

export default DealsHeader