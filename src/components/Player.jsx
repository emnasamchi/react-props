import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
function Player({ name, age, nationality, jersey_number, team, image }) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Name: {name}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Age :{age}
        </Typography>{" "}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Nationality :{nationality}
        </Typography>{" "}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Jersey number :{jersey_number}
        </Typography>{" "}
        <Typography variant="h5" color="blue-gray" className="mb-2">
         Team : {team}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Player;
