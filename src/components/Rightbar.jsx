import React from "react";
import { Container, makeStyles, Typography, Avatar,ImageList,ImageListItem, Link } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import {itemData} from '../staticdata/itemData'

console.log(itemData)

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position:'sticky',
    top:0
  },
  title:{
      fontSize:'14px',
      fontWeight:500,
      color:"#555"
  },
  link:{
      marginRight:theme.spacing(2),
      color:'#555',
      fontSize:14,
  }
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={6} style={{marginBottom:20}}>
        <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/sA_7BzSswLkGFiI4qNan5-HuX_9e-9bt0gdrzjhwCf9G1Bs4_o2-zQgXcOEDDU3VcAGb2vTixsmSSz7N4yptSX9Vlgm3I7DRblID_-2SjHmKXjf1ddnfCM-j4U4npRvScoDgNwYxnEOfA4-izuBVHGsMgg2XescXsqgugRjOV-9RTIYlMLvqq7vuLZO3QYtjCyJnOOhnTbKiH_bJtmLIaU5RQYBKYh8BGiBdvpu-jwCVl44NvRfKkRCXU3knKOdqpDpc7WIBfkbIXZTMX_O5-a3zp3VTPwZ0BpZ2QA2dNXXZaWNzANEta3sHizRFOLE7Y_2is3TxPUa7JdwH5RcLb-nRedn6I1dIgTDNYXeMM6ZDW3YzOZDgfJRzqharkOmGWmRpHHwKTtrFo6szNUuzMy5jCaYgmXSUN0AuXQSHhd2GtYOtjGgX6z77eOEPRFhE1qD5ZOaPgGzvx7w6MODrsIDf4WgT3UTcqpHyPUHlBl3YuPPnJyYaLSeWsLpq51BGOhQZhMi-aanLls3tDi5xVmpL30rkI6rcLZoSOhwe5llcO4ohqNGf_mrSDhVsyN8FoCnvVJnkF9qvfJRxQhHYc-Tn4TsGS9FxQdxa3itMEbuipan6J5-gIh-IJxdyiAAR7BrwJX_pQLdbXgm10jTfEfnyYsxs4saYr7UIXhYrskm0UahiUo7F4Xuc7_GNlfvbHZjZWVbkXerDd80VGg=w686-h914-no?authuser=0" />
        <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/pw/AM-JKLWHPHRlEqzHm2fFnuGfiflxitWifhfyXGQMDRuLbrs19q2D61hc-QG_jQf5rTgY50dspKlqJLSG8H7wG5RbqIHEhTHqWNfEJz7kE_7HlcR5c_Awr19TO5o32YjgHOXiCYTlyZ5ucC8mxh13xWaFGYjixKJJ_-K8mthH4qyRmqueRydFejI_rrS-0GIguxjinG_xyasnrA3x0V2P8Lr-C8bHb2rhjp-FLNxEW4FYdJiqugo6oEoW-f4Vg4fefPaB40NQ8zNneHs5g2GD2Pa0RnMcrBM1-NX8QhPRJKkuvmY_wl-IcGZdX-wcGBR5nlSo5K9VZ5I5yuNm-1sGCjHiM8G4Gc5d09jleC7-Lg9_QmiBXoGpOoKohTXGbdrTjqCoFUQ9diKJwEa-c0qzDpioAiAZmAI1T-QxirAsyqWViAVurtPlmgI8UC13B6qcbnjM7NIu_DHaBUZmTiblLsMFy7qIkbUdihauFtK-FQiI8ldrRwlOz9WEvUWrumeiSERbOiStXVjqXx0CqcdWhSBSh1m6L1sWBIJZXTDqh8a1uhE5OYt0VJFJYoTvOChSnV161B9ckK09X1UTLgePmeBB_pBoBxN2PdqcXRXeH2RYNQVG4cSysEeYr8-imuuzuAp3AKkJe2NTudU4JdBBJ-A1CquLf4Mr4wRF8b2n-2c3Zbb02Xz95s_gGEG_qNw3SycUp4gfJzbnwImpBHMgE_M8wGgMZFWNDVx7ee_r_yP7=w165-h220-no?authuser=0" />
        <Avatar alt="Cindy Baker" src="https://lh3.googleusercontent.com/pw/AM-JKLW1INxDfoaBcJ-9ZQy-2pClrUcFv9FCnbBHu3DHpNdCGFtplyJIBUF4O7oJc4LS0MXqXW_AysEn-J_ZdE6ekKuFluVcxHTcE1_tvDGsXzJzI-vh_R2QpsN2TznRqEiJBQK6RM8pHtSsOEL1R4YnueWcKYyRjYFrDSX3Ra7fUNlWBcP-47MrPzthYBDFX_CbEm0hPgP_OV0gNTNsgRsSLS6MUOkbYg_TckrF81VMHc4li8RqkOej7S8o1SqziaADpEeuh6yuigfnPyxxBOZzZsz2xJWMGrKI3BPfDgGtLw2FM5yCu7jzH3Wm-Wdwc_TBYFOffDhaTNs5iJFchZV8s6cD06zN9rZa4l8YpW74P4OxblpspRThuADdR-KpxIWfNWAVixr7Nw1U-vjtzpgxGws2MsjaYNjZu_W8DfugyfpVSQT9E-FIYUaenGT22UYKpro3fXyOLDPCHPqDgoY1DL-qmlQrQxTyK17hlDIGvrdyUqhh196QX9OxADH6VC2XXPI0x5c6tJnB5wghL37h6JR9EoPGN1KkzlaztR1ynZ0O9zPZjvWmYzqhI6VMtqv18gKfAGaWb9rdosRY9MJLbzWa28zPFrx6369yFnbS8rdFZxZ4pKcQVTxlzYBpzScRmhbqkp9Dk123YJFF2OrzIACRoGNVX_f-qJEaj2XYJ2mIuZLVsGZ9kXEmqnVmBt2mF5KC9xPrJBOQ1lFaLGfzmvDqriIrA01A2xlzpra8=w165-h220-no?authuser=0" />
        <Avatar alt="Agnes Walker" src="https://lh3.googleusercontent.com/pw/AM-JKLXAlIyNlbcBKRV0-RnMQSR2gPuq8AYotxoAaV-RWoy3qR31gjEG1nq4uwLm1-o9nlNe25Uf4Ra6TaPaFOix4qXWcDNqCU8ansnXM6BkkNe_M_-aqHa8rCXuSn9umzS079eYeWLXbna3I-SC9e_tKRzsyMFz8xSZaEogxzfJeacB5OzTM2oMJ3tjWiNTYrhut0MXbVieCa9EGUqCPLh4RaJmOZhMD8RZFD3JI-UMC9t2TU7mYvRQkFtUcPmGElLnnRegfj9PjVNU7hZFIyN2PoSqY4q2gn8pZY6l2rrNSpJT1dhFePxyMO1ibyvl-S-LHiUOfCc1Rlc3HuCvtcTT0dx4hKODMahhPxITrlrAbMZBrbvM4pYUJXwrTHneCs_E5mDH4tZGt_gXglrd_SWdQG2AIL93rMqBHxRk7QJeiQFXwvCsFTflsmx0MH2xwdd5tZ93RlYhbzXmdxdz29vKyvnEJdE6-sJ984JEZZITtTh8ADJxfHbSUU5ezKYU33C1hEtkVk_ZFmBV6u9YOAnxDvel8wwxCoR_QAXsNHozuUZB5-eADWRrdLRVrYu-snS8tAO8Jlx6rmv0QquhL6dp93eZtf5Q7zYzd3QehTr4FdNUbHBkRhbULQg9RtlN4qOEjS8pSaEFwAedDgEPd78E-zJ9u80SdhQmEjQboKA4Dm0Zox7BYiqtJ3hucxU1Lue2bUHQeLkZ8Ynk9gGJm2T8GqUA8JZb74iT_yLfTWEh=w165-h220-no?authuser=0" />
        <Avatar alt="Trevor Henderson" src="https://lh3.googleusercontent.com/pw/AM-JKLXQ5Te1Vf8E8uyqlBzXg3xeFJZPC-g0ueHvuNlzBhisNjXCnQDjM_45h6I_fpi2lEabyTpB58RvHQyqY-EZobClrl4auKzGlr0KarUjDzoaSEURbjyB3rhrh8tZpqak1N0o_5-SU_jWtbOZGpMUXYPR3-cKO-dvuzRPCd98kXAldCTevz0Sd-n8ajMwzCp_uxKzykJPJc200hEs_L7rxAzt6cpQuC8zFiBRzgo84Yuu0jg7nUhTuYJM06z6bma4JRX_RZ0Rkc_RxrKvaNOMz922_P7K9ZXjtQB6e6Uo5MttXVIxjVDfQoTpZrV4E5Ms_IrXSA2Q718kcKy2K9XkZY1dJqcsDftMdL051QcJg5fCJM1B3bjYkOODw0CaK0hi70Ib6nxQmdugWDiunRI_1jBE2Fs__vwZYWCEa0Vp8AeFEBDUr6IKCeUitx3keTd75bZ25t_lsyXTswkBsn9LR-4mB8pY-GliQ1f-HBMVhQwAzE9UgWGtcwFs8B6EGkx_QyQ8h-5HeJR8PjFvZzpgUROgmETZxiOwMLEkqS42P8jl5VpPq_TIPSgflUwwKCuZrANSqQJXtpK_ZzFUox7Tz3t8GL4i5SBlvw65lZEFvHMl5FPj2Bj7SyG2xFT0csIDxcuGgWipZ_CEhvGRZZ1HElec7Y1prxa81G4Do8xLLBhEqw2on6p_4gETXRSaGUJu02eOK1N6yILQus3gXg41le1jVU9Z4mkvZa1VwNSt=w686-h914-no?authuser=0&authuser=0" />
        <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/pw/AM-JKLWHPHRlEqzHm2fFnuGfiflxitWifhfyXGQMDRuLbrs19q2D61hc-QG_jQf5rTgY50dspKlqJLSG8H7wG5RbqIHEhTHqWNfEJz7kE_7HlcR5c_Awr19TO5o32YjgHOXiCYTlyZ5ucC8mxh13xWaFGYjixKJJ_-K8mthH4qyRmqueRydFejI_rrS-0GIguxjinG_xyasnrA3x0V2P8Lr-C8bHb2rhjp-FLNxEW4FYdJiqugo6oEoW-f4Vg4fefPaB40NQ8zNneHs5g2GD2Pa0RnMcrBM1-NX8QhPRJKkuvmY_wl-IcGZdX-wcGBR5nlSo5K9VZ5I5yuNm-1sGCjHiM8G4Gc5d09jleC7-Lg9_QmiBXoGpOoKohTXGbdrTjqCoFUQ9diKJwEa-c0qzDpioAiAZmAI1T-QxirAsyqWViAVurtPlmgI8UC13B6qcbnjM7NIu_DHaBUZmTiblLsMFy7qIkbUdihauFtK-FQiI8ldrRwlOz9WEvUWrumeiSERbOiStXVjqXx0CqcdWhSBSh1m6L1sWBIJZXTDqh8a1uhE5OYt0VJFJYoTvOChSnV161B9ckK09X1UTLgePmeBB_pBoBxN2PdqcXRXeH2RYNQVG4cSysEeYr8-imuuzuAp3AKkJe2NTudU4JdBBJ-A1CquLf4Mr4wRF8b2n-2c3Zbb02Xz95s_gGEG_qNw3SycUp4gfJzbnwImpBHMgE_M8wGgMZFWNDVx7ee_r_yP7=w165-h220-no?authuser=0" />
        <Avatar alt="Cindy Baker" src="https://lh3.googleusercontent.com/pw/AM-JKLW1INxDfoaBcJ-9ZQy-2pClrUcFv9FCnbBHu3DHpNdCGFtplyJIBUF4O7oJc4LS0MXqXW_AysEn-J_ZdE6ekKuFluVcxHTcE1_tvDGsXzJzI-vh_R2QpsN2TznRqEiJBQK6RM8pHtSsOEL1R4YnueWcKYyRjYFrDSX3Ra7fUNlWBcP-47MrPzthYBDFX_CbEm0hPgP_OV0gNTNsgRsSLS6MUOkbYg_TckrF81VMHc4li8RqkOej7S8o1SqziaADpEeuh6yuigfnPyxxBOZzZsz2xJWMGrKI3BPfDgGtLw2FM5yCu7jzH3Wm-Wdwc_TBYFOffDhaTNs5iJFchZV8s6cD06zN9rZa4l8YpW74P4OxblpspRThuADdR-KpxIWfNWAVixr7Nw1U-vjtzpgxGws2MsjaYNjZu_W8DfugyfpVSQT9E-FIYUaenGT22UYKpro3fXyOLDPCHPqDgoY1DL-qmlQrQxTyK17hlDIGvrdyUqhh196QX9OxADH6VC2XXPI0x5c6tJnB5wghL37h6JR9EoPGN1KkzlaztR1ynZ0O9zPZjvWmYzqhI6VMtqv18gKfAGaWb9rdosRY9MJLbzWa28zPFrx6369yFnbS8rdFZxZ4pKcQVTxlzYBpzScRmhbqkp9Dk123YJFF2OrzIACRoGNVX_f-qJEaj2XYJ2mIuZLVsGZ9kXEmqnVmBt2mF5KC9xPrJBOQ1lFaLGfzmvDqriIrA01A2xlzpra8=w165-h220-no?authuser=0" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>Galery</Typography>
      <ImageList rowHeight={120} className={classes.imageList} cols={2} style={{marginBottom:20}}>
        {itemData.map((item) => (
          <ImageListItem key={item} >
            <img src={item} alt={item} />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography className={classes.title} gutterBottom>Social Links</Typography>
       <Link href="#" className={classes.link} variant="body2">Linkdin</Link>
       <Link href="#" className={classes.link} variant="body2">Facebook</Link>
       <Link href="#" className={classes.link} variant="body2">Github</Link>
       <Link href="#" className={classes.link} variant="body2">Instagram</Link>
    </Container>
  );
}

export default Rightbar;
