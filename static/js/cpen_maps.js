$(document).ready(function() {

    var layers = ['ne_10m_geographic_lines','ne_10m_antarctic_ice_shelves_lines','ne_10m_antarctic_ice_shelves_polys','ne_10m_geography_marine_polys','ne_10m_geography_regions_elevation_points','ne_10m_geography_regions_points','ne_10m_geography_regions_polys','ne_10m_glaciated_areas','ne_10m_lakes','ne_10m_lakes_europe','ne_10m_lakes_historic','ne_10m_lakes_north_america','ne_10m_lakes_pluvial','ne_10m_land','ne_10m_land_ocean_label_points','ne_10m_land_ocean_seams','ne_10m_land_scale_rank','ne_10m_minor_islands','ne_10m_minor_islands_coastline','ne_10m_minor_islands_label_points','ne_10m_ocean','ne_10m_ocean_scale_rank','ne_10m_playas','ne_10m_reefs','ne_10m_rivers_europe','ne_10m_rivers_lake_centerlines','ne_10m_rivers_lake_centerlines_scale_rank','ne_10m_rivers_north_america']


    function newDataStore(layer_index){
        var sp_structures_dataSource = new ol.source.TileWMS(
            {
                url : 'http://ec2-44-201-211-76.compute-1.amazonaws.com:8080/geoserver/cpen412_project2/wms',
                params : {
                    'LAYERS' : layers[layer_index],
                    'TILED' : true
                },
                serverType : 'geoserver',
                transition : 0
            })
        return sp_structures_dataSource
    }
    

// var 	sp_structures_dataLayer = new ol.layer.Tile({
//     title : layers[0],
//     source : newDataStore(0)
// })

class MyLayer{
    constructor(index){
        this.index=index
    }
    create_layer_from_index() {
        var 	sp_structures_dataLayer = new ol.layer.Tile({
            title : layers[this.index],
            source : newDataStore(this.index)
        })
        return sp_structures_dataLayer
    }
}
// var 	sp_structures_dataLayer = new ol.layer.Tile({
//     title : layers[1],
//     source : newDataStore(1)
// })
// var 	sp_structures_dataLayer = new ol.layer.Tile({
//     title : layers[2],
//     source : newDataStore(2)
// })
// var 	sp_structures_dataLayer = new ol.layer.Tile({
//     title : layers[],
//     source : newDataStore(0)
// })
// var 	sp_structures_dataLayer = new ol.layer.Tile({
//     title : layers[0],
//     source : newDataStore(0)
// })

// var 	sp_structures_dataLayer1 = new ol.layer.Tile({
//     title : 'sp_structures1',
//     source : sp_structures_dataSource
// })



var base_maps = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
            new ol.layer.Tile({
            title: 'OSM',
            type: 'base',
            visible: true,
            source: new ol.source.OSM()
        }),
        // googleLayerHybrid
    ]
});

const sp_structures_dataLayer = new MyLayer(0)
const sp_structures_dataLayer1 = new MyLayer(1)
const sp_structures_dataLayer2 = new MyLayer(2)
const sp_structures_dataLayer3 = new MyLayer(3)
const sp_structures_dataLayer5 = new MyLayer(4)
const sp_structures_dataLayer6 = new MyLayer(5)
const sp_structures_dataLayer7 = new MyLayer(6)
const sp_structures_dataLayer8 = new MyLayer(7)
const sp_structures_dataLayer9 = new MyLayer(8)
const sp_structures_dataLayer10 = new MyLayer(9)
const sp_structures_dataLayer11 = new MyLayer(10)
const sp_structures_dataLayer12 = new MyLayer(11)
const sp_structures_dataLayer13 = new MyLayer(12)
const sp_structures_dataLayer14 = new MyLayer(13)
const sp_structures_dataLayer15 = new MyLayer(15)
const sp_structures_dataLayer16 = new MyLayer(16)
const sp_structures_dataLayer17 = new MyLayer(17)
const sp_structures_dataLayer18 = new MyLayer(18)

var overlays = new ol.layer.Group({
    'title': 'Overlays',
    layers: [
            sp_structures_dataLayer.create_layer_from_index(),
            sp_structures_dataLayer1.create_layer_from_index(),
            sp_structures_dataLayer2.create_layer_from_index(),
            sp_structures_dataLayer3.create_layer_from_index(),
            // sp_structures_dataLayer4.create_layer_from_index(),
            sp_structures_dataLayer5.create_layer_from_index(),
            sp_structures_dataLayer6.create_layer_from_index(),
            sp_structures_dataLayer7.create_layer_from_index(),
            sp_structures_dataLayer8.create_layer_from_index(),
            sp_structures_dataLayer9.create_layer_from_index(),
            sp_structures_dataLayer10.create_layer_from_index(),
            sp_structures_dataLayer11.create_layer_from_index(),
            sp_structures_dataLayer12.create_layer_from_index(),
            sp_structures_dataLayer13.create_layer_from_index(),
            sp_structures_dataLayer14.create_layer_from_index(),
            sp_structures_dataLayer15.create_layer_from_index(),
            sp_structures_dataLayer16.create_layer_from_index(),
            sp_structures_dataLayer17.create_layer_from_index(),
            sp_structures_dataLayer18.create_layer_from_index(),

           ]
});


var view_e = new ol.View({
projection : 'EPSG:4326',
center : [ -0.199323, 5.66964 ],
zoom : 16
})




var map = new ol.Map({
target : 'map',
controls : ol.control.defaults().extend(
[ new ol.control.LayerSwitcher(),
new ol.control.OverviewMap(),
new ol.control.ZoomSlider(), new ol.control.Attribution(),
        new ol.control.MousePosition(),
        new ol.control.ZoomToExtent(), new ol.control.FullScreen()

]),
renderer : 'canvas',

view : view_e
});



// map.addLayer(new_de);
map.addLayer(base_maps);
map.addLayer(overlays);


});