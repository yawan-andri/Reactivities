import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSideBar";

export default function ActivityDetailPage() {
    const {id} = useParams();
    const {activity, isLoadingACtivity} = useActivities(id);

    if (isLoadingACtivity) return <Typography>Loading Activity...</Typography>

    if (!activity) return <Typography>Activity Not Found</Typography>

    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat />
            </Grid2>
            <Grid2 size={4}>
                <ActivityDetailsSidebar />
            </Grid2>
        </Grid2>
    )
}