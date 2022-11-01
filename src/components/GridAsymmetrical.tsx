import {
  Grid,
  Skeleton,
  Avatar,
  createStyles,
  Text,
  useMantineTheme,
  Group
} from "@mantine/core";
import { TableScrollArea } from "./TableScrollArea";
import { OpenOrders } from "./OpenOrders";
import { loss, profit, orders} from "../Data";
import { RightTableArea } from "./RightTableArea";
import CandleStick from "./Candlestick";
import { InputTooltip } from "./InputTooltip";

const child = <Skeleton height={140} radius="md" animate={false} />;
const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: 1400,
    margin: "auto",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "170px",
  },
  vl: {
    borderLeft: "2px dotted grey",
    height: "80px",
  },
  flex:{
    display: 'flex',
  },
  boxShadow:{
    padding: "24px 12px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
  },
  cardIcon:{
    fontSize: "medium",
    textAlign: "center",
    backgroundColor: "#868e96",
    color: "white",
    width: "170px",
    padding: "8px",
    marginLeft: "-35px",
    marginTop: "5px"
},
tooltip:{
  display: "flex",
  justifyContent: "center",
  
},
bcolor:{

  backgroundColor: "#3c3c5c",
  padding: "24px 12px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
}
}));

export function GridAsymmetrical() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid>
        <Grid.Col xs={12} className={classes.boxShadow}>
          <div className={classes.flex}>
            <Group>
              <Avatar
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                radius="xl"
                size={50}
              />
              <Group className={classes.profile}>
                <Text
                  size="xl"
                  sx={{ textTransform: "uppercase", color: "#ebbd10" }}
                  weight={700}
                  color="dimmed"
                >
                  DR.STRG
                </Text>
                <Text size="xs" sx={{ marginTop: "-15px" }} color="dimmed">
                  Doctor Strange in the Multiverse of Madness
                </Text>
              </Group>
              <div className={classes.vl}></div>
            </Group>
            <Group>
              <ul>
                <li>
                  <Text className="listtext" sx={{ marginLeft: "-50px" }}>
                    price
                  </Text>
                  <Text sx={{ marginLeft: "-50px", color: "#0ace0a"}}>$48,054.2254</Text>
                </li>
                <li>
                  <Text className="listtext">
                    price
                  </Text>
                  <Text sx={{color: "#0ace0a"}}>$48,054.2254</Text>
                </li>
                <li>
                  <Text className="listtext">
                    24h change
                  </Text>
                  <Text>+3.24%</Text>
                </li>
                <li>
                  <Text className="listtext">
                   24h high
                  </Text>
                  <Text>$48,054.2254</Text>
                </li>
                <li>
                  <Text className="listtext">
                    24h low
                  </Text>
                  <Text>$48,054.2254</Text>
                </li>
                <li>
                  <Text className="listtext">
                    24h volume
                  </Text>
                  <Text>20,548.23M</Text>
                </li>
              </ul>
            </Group>
          </div>
        </Grid.Col>
        <Grid.Col xs={3} className={classes.boxShadow}>
            <TableScrollArea data={loss}/>
        </Grid.Col>
        <Grid.Col xs={6} className={classes.bcolor}>
          <CandleStick/>
          <Group className={classes.tooltip}>
            <div className="tooltipButton">
            <InputTooltip/>
          <button className="buttonsell btn">SELL NOW</button>
            </div>
            <div className="tooltipButton">
            <InputTooltip/>
          <button className="buttonbuy btn">BUY NOW</button>
            </div>

          </Group>
        </Grid.Col>
        <Grid.Col xs={3} className={classes.boxShadow}>
        <RightTableArea data={profit}/>
            </Grid.Col>
        <Grid.Col xs={12} className={classes.boxShadow}>
            <Group>
            <Text className={classes.cardIcon}
                  size="xl"
                  sx={{ textTransform: "uppercase" }}
                  weight={700}
                  color="dimmed"
                >OPEN ORDERS</Text>
                <Group>
                <Text
                  size="md"
                  sx={{ textTransform: "uppercase" }}
                  weight={400}
                  color="dimmed"
                >TOTAL OPEN ORDER AMOUNT: </Text>
                <Text sx={{ textTransform: "uppercase", color: "#ebbd10" }}>145,267,23$</Text>
                </Group>
               
            </Group>
            <OpenOrders data={orders}/>
        </Grid.Col>
      </Grid>
    </div>
  );
}
