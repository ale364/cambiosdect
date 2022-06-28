ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:6372").setExtent([3275617.459693, 305253.374898, 3804947.035261, 715550.294654]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Entidad_1 = new ol.format.GeoJSON();
var features_Entidad_1 = format_Entidad_1.readFeatures(json_Entidad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6372'});
var jsonSource_Entidad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entidad_1.addFeatures(features_Entidad_1);
var lyr_Entidad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entidad_1, 
                style: style_Entidad_1,
                interactive: false,
                title: '<img src="styles/legend/Entidad_1.png" /> Entidad'
            });
var format_Municipios_2021_2 = new ol.format.GeoJSON();
var features_Municipios_2021_2 = format_Municipios_2021_2.readFeatures(json_Municipios_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6372'});
var jsonSource_Municipios_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2021_2.addFeatures(features_Municipios_2021_2);
var lyr_Municipios_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_2021_2, 
                style: style_Municipios_2021_2,
                interactive: false,
                title: '<img src="styles/legend/Municipios_2021_2.png" /> Municipios_2021'
            });
var format_Amanzanamiento_3 = new ol.format.GeoJSON();
var features_Amanzanamiento_3 = format_Amanzanamiento_3.readFeatures(json_Amanzanamiento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6372'});
var jsonSource_Amanzanamiento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amanzanamiento_3.addFeatures(features_Amanzanamiento_3);
var lyr_Amanzanamiento_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amanzanamiento_3, 
                style: style_Amanzanamiento_3,
                interactive: false,
                title: '<img src="styles/legend/Amanzanamiento_3.png" /> Amanzanamiento'
            });
var format_ct_validados_por_funcion_4 = new ol.format.GeoJSON();
var features_ct_validados_por_funcion_4 = format_ct_validados_por_funcion_4.readFeatures(json_ct_validados_por_funcion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6372'});
var jsonSource_ct_validados_por_funcion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ct_validados_por_funcion_4.addFeatures(features_ct_validados_por_funcion_4);
var lyr_ct_validados_por_funcion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ct_validados_por_funcion_4, 
                style: style_ct_validados_por_funcion_4,
                interactive: true,
                title: '<img src="styles/legend/ct_validados_por_funcion_4.png" /> ct_validados_por_funcion'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Entidad_1.setVisible(true);lyr_Municipios_2021_2.setVisible(true);lyr_Amanzanamiento_3.setVisible(true);lyr_ct_validados_por_funcion_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Entidad_1,lyr_Municipios_2021_2,lyr_Amanzanamiento_3,lyr_ct_validados_por_funcion_4];
lyr_Entidad_1.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_Municipios_2021_2.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'CNCH': 'CNCH', 'REG_ECO': 'REG_ECO', 'DESC_REG': 'DESC_REG', 'DSR': 'DSR', 'DESC_DSR': 'DESC_DSR', 'CCT_DSR': 'CCT_DSR', 'DSR_ACT': 'DSR_ACT', 'DESC_DSRAC': 'DESC_DSRAC', 'REG_ACT': 'REG_ACT', 'DESC_REGAC': 'DESC_REGAC', 'DESC_MPIO': 'DESC_MPIO', 'ZONA_ECO': 'ZONA_ECO', 'PORCE_ECO': 'PORCE_ECO', 'UDCH_ACT': 'UDCH_ACT', 'UDCH_ANT': 'UDCH_ANT', 'CODPOST': 'CODPOST', 'ALMACEN': 'ALMACEN', 'CT_ALMACEN': 'CT_ALMACEN', 'UDCH_SEE': 'UDCH_SEE', 'MMIDH_28': 'MMIDH_28', 'DISTRITO': 'DISTRITO', 'NOMDISTRIT': 'NOMDISTRIT', 'PERSPOBEXT': 'PERSPOBEXT', 'HABITANTES': 'HABITANTES', 'HOMBRES': 'HOMBRES', 'MUJERES': 'MUJERES', });
lyr_Amanzanamiento_3.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'CVE_AGEB', 'CVE_MZA': 'CVE_MZA', 'TIPOMZA': 'TIPOMZA', });
lyr_ct_validados_por_funcion_4.set('fieldAliases', {'fid': 'fid', 'NIVEL': 'NIVEL', 'CT_DESTINO': 'CT_DESTINO', 'LONGITUD': 'LONGITUD', 'LATITUD': 'LATITUD', 'ADMINISTRATIVO ESPECIALIZADO': 'ADMINISTRATIVO ESPECIALIZADO', 'ASISTENTE DE SERVICIOS EN PLANTEL': 'ASISTENTE DE SERVICIOS EN PLANTEL', 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO': 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO', 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO ': 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO ', 'AYUDANTE ADMINISTRATIVO ': 'AYUDANTE ADMINISTRATIVO ', 'BIOLOGIA': 'BIOLOGIA', 'CONTRALOR ': 'CONTRALOR ', 'DIRECTOR': 'DIRECTOR', 'DIRECTOR ': 'DIRECTOR ', 'ESPAÑOL': 'ESPAÑOL', 'HISTORIA': 'HISTORIA', 'INGLES': 'INGLES', 'INTENDENTE': 'INTENDENTE', 'PREFECTURA ': 'PREFECTURA ', 'SECRETARIA DE APOYO': 'SECRETARIA DE APOYO', 'SUBDIRECTOR': 'SUBDIRECTOR', 'SUBDIRECTOR ': 'SUBDIRECTOR ', 'TRABAJADORA SOCIAL': 'TRABAJADORA SOCIAL', 'BIOLOGIA (5 HRS), VIDA SALUDABLE (1 HR)': 'BIOLOGIA (5 HRS), VIDA SALUDABLE (1 HR)', 'VIDA SALUDABLE': 'VIDA SALUDABLE', 'HISTORIA (2 HRS), VIDA SALUDABLE (1 HR)': 'HISTORIA (2 HRS), VIDA SALUDABLE (1 HR)', 'BIOLOGIA (1 HR), VIDA SALUDABLE (2 HRS)': 'BIOLOGIA (1 HR), VIDA SALUDABLE (2 HRS)', 'MAESTRA DE JARDIN DE NIÑOS': 'MAESTRA DE JARDIN DE NIÑOS', 'MATEMÁTICAS': 'MATEMÁTICAS', 'GEOGRAFÍA': 'GEOGRAFÍA', 'QUÍMICA': 'QUÍMICA', 'FÍSICA': 'FÍSICA', 'FORMACIÓN CÍVICA Y ÉTICA': 'FORMACIÓN CÍVICA Y ÉTICA', 'EDUCACIÓN FÍSICA': 'EDUCACIÓN FÍSICA', 'EDUCACIÓN TECNOLÓGICA': 'EDUCACIÓN TECNOLÓGICA', 'EDUCACIÓN ARTÍSTICA': 'EDUCACIÓN ARTÍSTICA', 'GEOGRAFÍA ': 'GEOGRAFÍA ', 'TUTORÍA': 'TUTORÍA', 'FORMACIÓN CÍVICA Y ÉTICA (12 HRS), HISTORIA (7 HRS)': 'FORMACIÓN CÍVICA Y ÉTICA (12 HRS), HISTORIA (7 HRS)', 'HISTORIA (8 HRS), TUTORÍA (6 HRS), VIDA SALUDABLE (5 HRS)': 'HISTORIA (8 HRS), TUTORÍA (6 HRS), VIDA SALUDABLE (5 HRS)', 'INSPECTORA DE JARDIN DE NIÑOS': 'INSPECTORA DE JARDIN DE NIÑOS', 'SUPERVISOR ': 'SUPERVISOR ', 'JEFE DE ENSEÑANZA': 'JEFE DE ENSEÑANZA', 'INSPECTOR BILINGÜE': 'INSPECTOR BILINGÜE', 'JEFE DE ZONAS': 'JEFE DE ZONAS', 'SUPERVISOR': 'SUPERVISOR', 'MAESTRO DE EDUCACIÓN ESPECIAL': 'MAESTRO DE EDUCACIÓN ESPECIAL', 'SUBDIRECTOR DE GESTIÓN': 'SUBDIRECTOR DE GESTIÓN', 'INSPECTOR BILINGÜE DE EDUCACIÓN PREESCOLAR INDÍGENA': 'INSPECTOR BILINGÜE DE EDUCACIÓN PREESCOLAR INDÍGENA', 'EDUCACIÓN FÍSICA ': 'EDUCACIÓN FÍSICA ', 'MAESTRO FRENTE A GRUPO': 'MAESTRO FRENTE A GRUPO', });
lyr_Entidad_1.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Municipios_2021_2.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'CNCH': 'TextEdit', 'REG_ECO': 'TextEdit', 'DESC_REG': 'TextEdit', 'DSR': 'TextEdit', 'DESC_DSR': 'TextEdit', 'CCT_DSR': 'TextEdit', 'DSR_ACT': 'TextEdit', 'DESC_DSRAC': 'TextEdit', 'REG_ACT': 'TextEdit', 'DESC_REGAC': 'TextEdit', 'DESC_MPIO': 'TextEdit', 'ZONA_ECO': 'TextEdit', 'PORCE_ECO': 'TextEdit', 'UDCH_ACT': 'TextEdit', 'UDCH_ANT': 'TextEdit', 'CODPOST': 'TextEdit', 'ALMACEN': 'TextEdit', 'CT_ALMACEN': 'TextEdit', 'UDCH_SEE': 'TextEdit', 'MMIDH_28': 'TextEdit', 'DISTRITO': 'TextEdit', 'NOMDISTRIT': 'TextEdit', 'PERSPOBEXT': 'TextEdit', 'HABITANTES': 'Range', 'HOMBRES': 'Range', 'MUJERES': 'Range', });
lyr_Amanzanamiento_3.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'CVE_AGEB': 'TextEdit', 'CVE_MZA': 'TextEdit', 'TIPOMZA': 'TextEdit', });
lyr_ct_validados_por_funcion_4.set('fieldImages', {'fid': 'TextEdit', 'NIVEL': 'TextEdit', 'CT_DESTINO': 'TextEdit', 'LONGITUD': 'TextEdit', 'LATITUD': 'TextEdit', 'ADMINISTRATIVO ESPECIALIZADO': 'Range', 'ASISTENTE DE SERVICIOS EN PLANTEL': 'Range', 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO': 'Range', 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO ': 'Range', 'AYUDANTE ADMINISTRATIVO ': 'Range', 'BIOLOGIA': 'Range', 'CONTRALOR ': 'Range', 'DIRECTOR': 'Range', 'DIRECTOR ': 'Range', 'ESPAÑOL': 'Range', 'HISTORIA': 'Range', 'INGLES': 'Range', 'INTENDENTE': 'Range', 'PREFECTURA ': 'Range', 'SECRETARIA DE APOYO': 'Range', 'SUBDIRECTOR': 'Range', 'SUBDIRECTOR ': 'Range', 'TRABAJADORA SOCIAL': 'Range', 'BIOLOGIA (5 HRS), VIDA SALUDABLE (1 HR)': 'Range', 'VIDA SALUDABLE': 'Range', 'HISTORIA (2 HRS), VIDA SALUDABLE (1 HR)': 'Range', 'BIOLOGIA (1 HR), VIDA SALUDABLE (2 HRS)': 'Range', 'MAESTRA DE JARDIN DE NIÑOS': 'Range', 'MATEMÁTICAS': 'Range', 'GEOGRAFÍA': 'Range', 'QUÍMICA': 'Range', 'FÍSICA': 'Range', 'FORMACIÓN CÍVICA Y ÉTICA': 'Range', 'EDUCACIÓN FÍSICA': 'Range', 'EDUCACIÓN TECNOLÓGICA': 'Range', 'EDUCACIÓN ARTÍSTICA': 'Range', 'GEOGRAFÍA ': 'Range', 'TUTORÍA': 'Range', 'FORMACIÓN CÍVICA Y ÉTICA (12 HRS), HISTORIA (7 HRS)': 'Range', 'HISTORIA (8 HRS), TUTORÍA (6 HRS), VIDA SALUDABLE (5 HRS)': 'Range', 'INSPECTORA DE JARDIN DE NIÑOS': 'Range', 'SUPERVISOR ': 'Range', 'JEFE DE ENSEÑANZA': 'Range', 'INSPECTOR BILINGÜE': 'Range', 'JEFE DE ZONAS': 'Range', 'SUPERVISOR': 'Range', 'MAESTRO DE EDUCACIÓN ESPECIAL': 'Range', 'SUBDIRECTOR DE GESTIÓN': 'Range', 'INSPECTOR BILINGÜE DE EDUCACIÓN PREESCOLAR INDÍGENA': 'Range', 'EDUCACIÓN FÍSICA ': 'Range', 'MAESTRO FRENTE A GRUPO': 'Range', });
lyr_Entidad_1.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_Municipios_2021_2.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'CNCH': 'no label', 'REG_ECO': 'no label', 'DESC_REG': 'no label', 'DSR': 'no label', 'DESC_DSR': 'no label', 'CCT_DSR': 'no label', 'DSR_ACT': 'no label', 'DESC_DSRAC': 'no label', 'REG_ACT': 'no label', 'DESC_REGAC': 'no label', 'DESC_MPIO': 'no label', 'ZONA_ECO': 'no label', 'PORCE_ECO': 'no label', 'UDCH_ACT': 'no label', 'UDCH_ANT': 'no label', 'CODPOST': 'no label', 'ALMACEN': 'no label', 'CT_ALMACEN': 'no label', 'UDCH_SEE': 'no label', 'MMIDH_28': 'no label', 'DISTRITO': 'no label', 'NOMDISTRIT': 'no label', 'PERSPOBEXT': 'no label', 'HABITANTES': 'no label', 'HOMBRES': 'no label', 'MUJERES': 'no label', });
lyr_Amanzanamiento_3.set('fieldLabels', {'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'CVE_LOC': 'no label', 'CVE_AGEB': 'no label', 'CVE_MZA': 'no label', 'TIPOMZA': 'no label', });
lyr_ct_validados_por_funcion_4.set('fieldLabels', {'fid': 'no label', 'NIVEL': 'header label', 'CT_DESTINO': 'inline label', 'LONGITUD': 'no label', 'LATITUD': 'no label', 'ADMINISTRATIVO ESPECIALIZADO': 'inline label', 'ASISTENTE DE SERVICIOS EN PLANTEL': 'inline label', 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO': 'inline label', 'ASISTENTE DE SERVICIOS Y MANTENIMIENTO ': 'inline label', 'AYUDANTE ADMINISTRATIVO ': 'inline label', 'BIOLOGIA': 'inline label', 'CONTRALOR ': 'inline label', 'DIRECTOR': 'inline label', 'DIRECTOR ': 'inline label', 'ESPAÑOL': 'inline label', 'HISTORIA': 'inline label', 'INGLES': 'inline label', 'INTENDENTE': 'inline label', 'PREFECTURA ': 'inline label', 'SECRETARIA DE APOYO': 'inline label', 'SUBDIRECTOR': 'inline label', 'SUBDIRECTOR ': 'inline label', 'TRABAJADORA SOCIAL': 'inline label', 'BIOLOGIA (5 HRS), VIDA SALUDABLE (1 HR)': 'inline label', 'VIDA SALUDABLE': 'inline label', 'HISTORIA (2 HRS), VIDA SALUDABLE (1 HR)': 'inline label', 'BIOLOGIA (1 HR), VIDA SALUDABLE (2 HRS)': 'inline label', 'MAESTRA DE JARDIN DE NIÑOS': 'inline label', 'MATEMÁTICAS': 'inline label', 'GEOGRAFÍA': 'inline label', 'QUÍMICA': 'inline label', 'FÍSICA': 'inline label', 'FORMACIÓN CÍVICA Y ÉTICA': 'inline label', 'EDUCACIÓN FÍSICA': 'inline label', 'EDUCACIÓN TECNOLÓGICA': 'inline label', 'EDUCACIÓN ARTÍSTICA': 'inline label', 'GEOGRAFÍA ': 'inline label', 'TUTORÍA': 'inline label', 'FORMACIÓN CÍVICA Y ÉTICA (12 HRS), HISTORIA (7 HRS)': 'inline label', 'HISTORIA (8 HRS), TUTORÍA (6 HRS), VIDA SALUDABLE (5 HRS)': 'inline label', 'INSPECTORA DE JARDIN DE NIÑOS': 'inline label', 'SUPERVISOR ': 'inline label', 'JEFE DE ENSEÑANZA': 'inline label', 'INSPECTOR BILINGÜE': 'inline label', 'JEFE DE ZONAS': 'inline label', 'SUPERVISOR': 'inline label', 'MAESTRO DE EDUCACIÓN ESPECIAL': 'inline label', 'SUBDIRECTOR DE GESTIÓN': 'inline label', 'INSPECTOR BILINGÜE DE EDUCACIÓN PREESCOLAR INDÍGENA': 'inline label', 'EDUCACIÓN FÍSICA ': 'inline label', 'MAESTRO FRENTE A GRUPO': 'inline label', });
lyr_ct_validados_por_funcion_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});