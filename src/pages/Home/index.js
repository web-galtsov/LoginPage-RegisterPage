import React from "react";
import { Grid } from "@material-ui/core";
import CoffeCard from "../CoffeCard";


export default function Home() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeCard />
            </Grid>
        </Grid>
    )

}
