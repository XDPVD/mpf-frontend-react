import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  horaEntrega: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  tituloForm: {
    marginTop: "20px",
  },

  answerList: {
    textAlign: "left",
  },

  commentCard: {
    borderRadius: "20px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
  },
  answerCard: {
    marginLeft: "25px",
    marginBottom: "15px",
    background: "whitesmoke",
  },
  username: {
    fontSize: "0.75em",
    fontWeight: "bold",
  },
  dateTime: {
    fontSize: "0.80em",
    fontStyle: "italic",
  },
  userComment: {
    padding: "10px",
  },
  userIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
  contAct: {
    padding: "10px",
  },
  content: {
    marginBottom: "5px",
    textAlign: "left",
  },

  actions: {
    display: "flex",
    flexFlow: "row",
    alignContent: "center",
    "& > p": {
      flex: 6,
    },
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0px",
  },
  tile: {
    fontSize: 20,
    margin: "0px",
    textOverflow: "ellipsis",
  },
  cardContent: {
    display: "flex",
    alignContent: "center",
  },
  conten: {
    display: "flex",
    flexDirection: "flow",
    alignItems: "center",
    height: "70px",
  },
  iconCon: {
    fontSize: 50,
    margin: "10px",
  },

  grupal: {
    marginTop: "20px",
  },

  btn: {
    margin: "5px",
  },
  guardarButton: {
    marginTop: "10px",
  },

  textField: {
    width: "100%",
    margin: "10px 0px",
  },
  actionsReply: {
    "& button": {
      margin: "0px 5px",
    },
  },
  loading: {
    position: "absolute",
    top: "25px",
    right: "50%",
  },
  formDiv: {
    position: "relative",
  },

  fecha: {
    margin: "5px 0px 5px 10px",
  },
  fechaMax: {
    display: "flex",
    alignItems: "center",
  },
  prin: {
    display: "flex",
    margin: "16px 5px",
    border: "2px solid",
    borderRadius: "10px",
    padding: "8px",
    justifyContent: "space-between",
    height: "100px",
  },
  desc: {
    display: "flex",
    flexDirection: "flow",
    alignItems: "center",
  },
  title: {
    fontSize: "32px",
    margin: "0px",
    marginLeft: "10px",
  },
  resourceContent: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  backdrop: {
    "z-index": "10",
  },
  btnNota: {
    width: "100px",
    padding: "5px",
  },

  btnClose: {
    marginLeft: "auto",
    fontSize: "20px",
  },
  titleWrapper: {
    display: "flex",
    padding: "8px",
    justifyContent: "space-between",
  },
  ventana: {
    position: "absolute",
    width: "85%",
    height: "80%",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "10px 5px 5px black",
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    FlexDirection: "column",
    overflowY: "scroll",
    "z-index": "30",
  },
});
