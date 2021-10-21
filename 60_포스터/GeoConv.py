from pyproj import Proj
from pyproj import transform

WGS84 = { 'proj':'latlong', 'datum':'WGS84', 'ellps':'WGS84', }

# conamul
TM127 = { 'proj':'tmerc', 'lat_0':'38N', 'lon_0':'127.0028902777777777776E',
   'ellps':'bessel', 'x_0':'200000', 'y_0':'500000', 'k':'1.0',
   'towgs84':'-146.43,507.89,681.46'}

# naver
TM128 = { 'proj':'tmerc', 'lat_0':'38N', 'lon_0':'128E', 'ellps':'bessel',
   'x_0':'400000', 'y_0':'600000', 'k':'0.9999',
   'towgs84':'-146.43,507.89,681.46'}

def wgs84_to_tm128(longitude, latitude):
   return transform( Proj(**WGS84), Proj(**TM128), longitude, latitude )

def tm128_to_wgs84(x, y):
   return transform( Proj(**TM128), Proj(**WGS84), x, y )

def wgs84_to_tm127(longitude, latitude):
   return map(lambda x:2.5*x, transform( Proj(**WGS84), Proj(**TM127), longitude, latitude ))

def tm127_to_wgs84(x, y):
   return transform( Proj(**TM127), Proj(**WGS84), x/2.5, y/2.5 )

def wgs84_to_cyworld(longitude, latitude):
   x_min = 4456260.72
   y_min = 1161720.00
   long_min = 123.78323
   lat_min = 32.27345
   max_grid_length = 112721.92
   x = (longitude-long_min)*max_grid_length/3.1308 + x_min
   y = (latitude-lat_min)*max_grid_length/3.1308 + y_min
   return x, y

def cyworld_to_wgs84(x, y):
   x_min = 4456260.72;
   y_min = 1161720.00;
   long_min = 123.78323;
   lat_min = 32.27345;
   max_grid_length = 112721.92;
   longitude = long_min + (x-x_min)*3.1308 / max_grid_length;
   latitude = lat_min + (y-y_min)*3.1308 / max_grid_length;
   return longitude, latitude
