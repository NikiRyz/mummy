import React from 'react';
import './CampInfo.css';
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'

class CampInfo extends React.Component {
   
    
  
    render() {
      return (
          <div className="info">
              <Header/>
                <Info
                 h2="Молодёжный центр Smart Camp 2019 Республика Крым" 
                 src=" http://www.molcentr.ru/upload/resize_cache/alt/258/258e0507e7a84198fcfe69164e61f3a2_688_404.jpeg"
               place="Побережье Черного моря, Россия, Республика Крым, Евпатория, пгт. Заозерное, ул.Аллея Дружбы 29" 
               content="Адаптирована к детскому отдыху, озелененная, освещаемая в вечернее и ночное время суток, огражденная
                и круглосуточно охраняемая специализированной службой охраны, выходы с территории с контрольно-пропускными 
                постами, наличие системы видеонаблюдения. Инфраструктура лагеря включает: в себя два бассейна (глубиной до 2м),
                 библиотека, беседки, кинозал, летний театр, конференц-зал, концертный зал, крытый спортивный зал, спортивные площадки 
                 с искусственным покрытием (футбольное поле, волейбольная и баскетбольная площадки, площадка для фитнеса), скалодром, детский 
                 городок, игровая комната, настольный теннис, образовательный центр, помещения, оборудованные для кружковой работы 
                 (студии, клубы, центры, лаборатории, мастерские), ресторан, кафе, сувенирный магазин. "
                 life=" В стационарных корпусах в капитальном исполнении. Размещение в 4-местных номерах с
                  электронными ключами. Удобства на этаже: душ, туалет, умывальник, наличие туалетных принадлежностей
                   (туалетная бумага, мыло). В комнате: кровати, шкаф для одежды, стол, стулья, диван, полки. 
                   Еженедельная смена постельного белья, ежедневная влажная уборка комнат и мест общего пользования. "
                food="5-ти разовое сбалансированное питание по системе «Шведский стол» в ресторане с кондиционированными
                    залами и летней террасой. В ежедневный рацион включено достаточное количество мясных, рыбных, кисломолочных,
                     молочных и других натуральных экологически чистых продуктов, наличие витаминного стола, предоставление сухого пайка
                      в день отъезда, на период выездных мероприятий. Организация обслуживания питания осуществляется официантами."
                 beach="Собственный песчаный. Территория пляжа огорожена, оборудована теневыми навесами, зонтиками от солнца,
                       шезлонгами, настилами, кабинками для переодевания, душевыми, спасательной вышкой с постом спасателей и плавсредствами,
                        есть медицинский пост."/> </div>   
  
      )
    }
  }

 
  
  
export default CampInfo;
