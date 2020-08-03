package com.citi.trade.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
	
	private static final String MYSQL_JDBC_DRIVER = "com.mysql.jdbc.Driver";
	private static final String dbURL = "jdbc:mysql://localhost:3306/dev_db?useSSL=false";
	private static final String username = "root";
	private static final String password = "Purva@2000";

	/**
	 * This method creates mysql connection object
	 * @return connection object
	 */
	public static Connection createConnection() {
		Connection connection = null;
		try {
			Class.forName(MYSQL_JDBC_DRIVER);
			connection = DriverManager.getConnection(dbURL, username, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return connection;
	}
}