import style from "./footer.module.css";

function Footer({}) {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.copyright}>
          <div className={style.provider}>AI Tech 부스트캠프 5기 RecSys</div>
          <div className={style.company}>LOLRECS ⓒ 스나이퍼 Sniper 2023</div>
        </div>
        <div>
          LOLRECS ⓒ isn't endorsed by Riot Games and doesn't reflect the views
          or opinions of Riot Games or anyone officially involved in producing
          or managing Riot Games properties. Riot Games, and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;