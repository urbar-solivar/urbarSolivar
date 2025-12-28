---
layout: page
title: O nás
subtitle: Základne právne a registračné informácie o spoločenstve
kataster_lv_uri_prefix: "https://kataster.skgeodesy.sk/Portal45/api/Bo/GeneratePrfPublic?outputType=html"
---

- Urbár Solivar pozem. spol. pôsobí na základe zákona: [97/2013 Z. z. z 26. marca 2013 o pozemkových spoločenstvách](https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2013/97/) 

# Registrácia spoločenstva v registri pozemkových spoločenstiev


| {: style=";background-color: #808080; color: white;font-weight: bold;" }  Identifikátor  | {: style=";background-color: #808080; color: white;font-weight: bold;" } Hodnota  |
| :---------- | :-------------------------------------------------------- |
| **Názov** | Urbár Solivar pozem. spol. |
| **Sídlo** | Na vyhliadke 6, 080 05	Prešov	 |
| **IČO** | 42382742 |
| **Dátum zápisu** | 14.07.2014 |
| **Vložka číslo** | R-0090/PO |
| **Stav PS** | Zaregistrovaná |
| **Funkčné obdobie výboru** | 5 rokov |
| **Funkčné obdobie dozornej rady** | 5 rokov |
| **Vykonáva podnikateľskú činnosť?** | nie |
| **Spoločenstvo vlastníkov spoločne obhospod. nehnuteľnosti** | nie |
| **Poznámka** | funkčné obdobie aktuálneho výboru a dorozornej rady plynie od 	16.06.2025 a konči najneskôr 	15.06.2030 |
|**Výpis z registra**| [k 28.7.2025](https://drive.google.com/file/d/1FvbNIJsUwFz6dMj-B0hHqOxJJA7nRvK5/view?usp=drive_link)|

## Katastrálne informácie

- [Zoznam nehnuteľnosti Urbár Solivar pozem. spol. podľa zákona č.110/2018 zbierky zákonov § 18 ods. 2 zákona]({{ '/assets/ZoznamNehnuteľnosti.pdf' |relative_url }})


| {: style=";background-color: #808080; color: white;font-weight: bold;" }  Číslo k.ú. | {: style=";background-color: #808080; color: white;font-weight: bold;" }  Názov k.ú. | {: style=";background-color: #808080; color: white;font-weight: bold;" }  Číslo LV | {: style=";background-color: #808080; color: white;font-weight: bold;" }  Poznámka (typ pozemkov) | {: style=";background-color: #808080; color: white;font-weight: bold;" } Výmera [ha] |
|----------: | :--------- | :------- | :--------| --------:|
| 813591 | DULOVA VES | [447]({{ page.kataster_lv_uri_prefix }}&prfNumber=447&cadastralUnitCode=813591)     | TPP, Lesný pozemok, Ostatná plocha          |	177.5093  |	
| 825387 | KOKOŠOVCE  | [495]({{ page.kataster_lv_uri_prefix }}&prfNumber=495&cadastralUnitCode=825387)     | TPP, Lesný pozemok, Orná pôda               |  19.9224	|	
| 857301 | SOLIVAR    | [3590]({{ page.kataster_lv_uri_prefix }}&prfNumber=3590&cadastralUnitCode=857301)   | TPP                                         |  39.8894	|	
| 857301 | SOLIVAR    | [4378]({{ page.kataster_lv_uri_prefix }}&prfNumber=4378&cadastralUnitCode=857301)   | TPP, Orná pôda, Zastavaná plocha a nádvorie |   0.0636  |	
| 874159 | ŽEHŇA      | [635]({{ page.kataster_lv_uri_prefix }}&prfNumber=635&cadastralUnitCode=874159)	    | TPP                                         |   0.3643  |
|===
| Spolu:   {: style=";background-color: #808080; color: white;font-weight: bold;" }  | 237.7490 ha {: style=";background-color: #808080; color: white;font-weight: bold;" }  :||||

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<div style="max-width: 500px; margin: 0 auto;">
  <canvas id="pozemkyChartKlikatelny"></canvas>
</div>
<script>
  const dataPozemkyKlikatelny = {
    labels: [
      'Lesný pozemok (196.87 ha | 82.8%)',
      'Trvalý trávny porast (40.74 ha | 17.1%)',
      'Ostatná plocha (0.14 ha | 0.1%)'
    ],
    datasets: [{
      data: [196.87, 40.74, 0.14], // Výmery v ha
      backgroundColor: [
        'DarkGoldenRod', // Zelená (Les)
        'DarkGreen', // Žltá (TPP)
        'rgb(108, 117, 125)' // Sivá (Ostatné)
      ],
      hoverOffset: 4
    }]
  };

  const configPozemkyKlikatelny = {
    type: 'pie',
    data: dataPozemkyKlikatelny,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Rozdelenie pozemkov podľa typu (v ha) - Kliknite pre detaily'
        }
      },
    // KĽÚČOVÁ FUNKCIA PRE KLIKANIE A PRESMEROVANIE
      onClick: (e, elements) => {
        if (elements.length > 0) {
          const clickedElementIndex = elements[0].index;
          let redirectUrl = null;

          if (clickedElementIndex === 0) {
            // Index 0: Lesný pozemok
            redirectUrl = 'https://maty535.github.io/urbarSolivar/assets/img/mapa-lesy.jpg';
          } else if (clickedElementIndex === 1) {
            // Index 1: Trvalý trávny porast (Pasienky)
            redirectUrl = 'https://maty535.github.io/urbarSolivar/assets/img/mapa-pasienky.jpg';
          }

          if (redirectUrl) {
            // Otvorí odkaz v novom okne/karte. Pre otvorenie v rovnakom okne použite:
            // window.location.href = redirectUrl;
            window.open(redirectUrl, '_blank');
          } else {
            // Ostatná plocha
            const label = dataPozemkyKlikatelny.labels[clickedElementIndex];
            alert(`Klikli ste na: ${label}.\nPre túto kategóriu nie je definovaná mapa.`);
          }
        }
      }
    },
  };

  new Chart(
    document.getElementById('pozemkyChartKlikatelny'),
    configPozemkyKlikatelny
  );
</script>

<img alt="Podla katastralneho uzemia" src="https://github.com/user-attachments/assets/067408ca-d718-446c-bfcb-dd69eb4b7929" />


# Mapa urbárskych pozemkov
<iframe src="https://zbgis.skgeodesy.sk/mapka/e/ac88R?pos=48.953387,21.302007,12&bm=world-imagery" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

# História
- [stručné historické míľniky]({{ '/historia/' | relative_url }})

# Zakladajúca zmluva
- [zmluva + stanovy]({{ '/docs/' |relative_url }})

