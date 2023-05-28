function generateRandomRe() { $.getJSON("{{ site.url }}/region/{{ site.region_slug }}/data/top.json", function(data) { var count = data.length; var random = []; var counter = 0; var number = 3; var div = $("#adsre"); var usd = {{ site.usd }}; var eur = {{ site.eur }}; function reRoomOrPrym() { return (data[i].type.includes('{{ site.data.lang-uk.re_roomsp }}')) ? " {{ site.data.lang-uk.re_roomsps }}" : " {{ site.data.lang-uk.re_rooms }}"; }; function reAdsLocation() { return (data[i].location && data[i].location !== '') ? ', ' + data[i].location : ''; }; function reAdsRegion() { return (data[i].region && data[i].region !== '') ? ', ' + data[i].region : ''; }; function reAdsPrice() { if (data[i].price !== '' && data[i].price.includes('$')) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price + '">' + (data[i].price.replace('$','') * usd).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price !== '' && data[i].price.includes('€')) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price + '">' + (data[i].price.replace('€','') * eur).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price !== '') { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price + '">' + (data[i].price * 1).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } } function reAdsRent() { if (data[i].rent == 1) { return '<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_for_rent }} <span class="text-lowercase">' + data[i].type +  '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }}, {{ site.data.lang-uk.re_na }} ' + data[i].floor + '{{ site.data.lang-uk.re_mu }} {{ site.data.lang-uk.re_floorci }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ' {{ site.data.lang-uk.re_for_month }}, ' + reAdsTel() + '</div></div>'; } } function reAdsPriceSqmt() { if (data[i].price_sqmt !== '' && data[i].price_sqmt.includes('$')) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price_sqmt + '">' + (data[i].price_sqmt.replace('$','') * usd).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price_sqmt !== '' && data[i].price_sqmt.includes('€')) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price_sqmt + '">' + (data[i].price_sqmt.replace('€','') * eur).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price_sqmt !== '') { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price_sqmt + '">' + (data[i].price_sqmt * 1).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } } function reAdsTel() { return '&nbsp;<div class="btn-group"><button type="button" class="btn btn-link px-1 rounded-0 border-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">&phone;</button><div class="dropdown-menu px-2 dropdown-menu-right"><span class="text-nowrap">' + data[i].seller.replace('{{ site.data.lang-uk.re_seller }} ','') + '</span><br><a href="tel:+' + data[i].phone + '">+' + data[i].phone.substr(0, 2) + '&nbsp;' + data[i].phone.substr(2, 3) + '&nbsp;' + data[i].phone.substr(5, 3) + '&nbsp;' + data[i].phone.substr(8, 2) + '&nbsp;' + data[i].phone.substr(10, 2) + '</a><i class="d-none">' + data[i].id + '</i></div></div>&nbsp;'; } function reAdsType() { if (data[i].type.includes('{{ site.data.lang-uk.re_apartment }}') && data[i].rent == '' && data[i].price !== '') { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell_apartment }}</strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_na }} ' + data[i].floor + '{{ site.data.lang-uk.re_mu }} {{ site.data.lang-uk.re_floorci }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } else if (data[i].rent == 1 && data[i].price !== '' && data[i].price_sqmt == '' && data[i].type.includes('{{ site.data.lang-uk.re_roomsp }}')) { div.append('' + reAdsRent() + ''); } else if (data[i].rent == 1 && data[i].price !== '' && data[i].price_sqmt == '' && (data[i].type.includes('{{ site.data.lang-uk.re_house }}') || data[i].type.includes('{{ site.data.lang-uk.re_house | downcase }}'))) { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_for_rent }} <span class="text-lowercase">' + data[i].type +  '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_floorss }} ' + data[i].floors + ' {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ' {{ site.data.lang-uk.re_for_month }}, ' + reAdsTel() + '</div></div>'); } else if (data[i].rent == 1 && data[i].price !== '' && data[i].price_sqmt == '') { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_for_rent }} <span class="text-lowercase">' + data[i].type +  '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_na }} ' + data[i].floor + '{{ site.data.lang-uk.re_mu }} {{ site.data.lang-uk.re_floorci }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ' {{ site.data.lang-uk.re_for_month }}, ' + reAdsTel() + '</div></div>'); } else if (data[i].rent == 1 && data[i].price == '' && data[i].price_sqmt !== '') { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_for_rentnd }} <span class="text-lowercase">' + data[i].type + '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_na }} ' + data[i].floor + '{{ site.data.lang-uk.re_mu }} {{ site.data.lang-uk.re_floorci }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPriceSqmt() + ' {{ site.data.lang-uk.re_for_day }} ' + reAdsTel() + '</div></div>'); } else if (data[i].type.includes('{{ site.data.lang-uk.re_house }}') || data[i].type.includes('{{ site.data.lang-uk.re_house | downcase }}')) { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_floorss }} ' + data[i].floors + ' {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } else if (data[i].type.includes('{{ site.data.lang-uk.re_house_part }}')) { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell }} {{ site.data.lang-uk.re_house_partm }}</strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_na }} ' + data[i].floor + '{{ site.data.lang-uk.re_mu }} {{ site.data.lang-uk.re_floorci }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } else if (data[i].type.includes('{{ site.data.lang-uk.re_land }}')) { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell_land }}</strong> {{ site.data.lang-uk.re_surface }} ' + data[i].surface_land + '&nbsp;{{ site.data.lang-uk.m }} (' + (data[i].surface_land / 10000) + ' га) {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } else if (data[i].type.includes('{{ site.data.lang-uk.re_garage }}') || data[i].type.includes('{{ site.data.lang-uk.re_store }}')) { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> {{ site.data.lang-uk.re_surface }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } else if (data[i].type.includes('{{ site.data.lang-uk.re_roomsp }}')) { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }} {{ site.data.lang-uk.re_na }} ' + data[i].floor + '{{ site.data.lang-uk.re_mu }} {{ site.data.lang-uk.re_floorci }} {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } else { div.append('<div class="card mx-2"><div class="card-body"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> {{ site.data.lang-uk.re_surface_total }} ' + data[i].surface + '&nbsp;{{ site.data.lang-uk.m }},' + reRoomOrPrym() + ' ' + data[i].rooms + ', {{ site.data.lang-uk.re_floorss }} ' + data[i].floor + ' {{ site.data.lang-uk.re_address }} ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>'); } } div.append(); while (counter < number) { var i = Math.floor(Math.random() * count); if (random.indexOf(i) == "-1") { if (counter == (number - 1)) { reAdsType(); } else { reAdsType(); } random.push(i); counter++; } } }); } $(document).ready(function() { generateRandomRe(); });
