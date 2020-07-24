export const config = {
  'username': process.env.POSTGRESS_USERNAME,
  'password': process.env.POSTGRESS_PASSWORD,
  'database': process.env.POSTGRESS_DATABASE,
  'host': process.env.POSTGRESS_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.POSTGRESS_REGION,
  'aws_profile': process.env.POSTGRESS_PROFILE,
  'aws_media_bucket': process.env.POSTGRESS_MEDIA_BUCKET,
  'url': 'http://localhost:8100',
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};